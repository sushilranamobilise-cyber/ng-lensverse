import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ALL_SERVICES, Service } from '../../../data/services.data'; // adjust path if needed
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";

interface GalleryItem {
  title: string;
  image: string;
  serviceTitle?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, InnerBannerComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryItems: GalleryItem[] = [];
  isModalOpen = false;
  modalIndex = 0;

  ngOnInit(): void {
    const items: GalleryItem[] = [];

    // Loop through all services and collect sub-services
    (ALL_SERVICES || []).forEach((s: Service) => {
      (s.subServices || []).forEach(sub => {
        if (sub.image) {
          items.push({
            title: sub.title,
            image: sub.image,
            serviceTitle: s.title
          });
        }
        if (Array.isArray(sub.gallery)) {
          sub.gallery.forEach(img =>
            items.push({
              title: sub.title,
              image: img,
              serviceTitle: s.title
            })
          );
        }
      });
    });

    // remove duplicates & fallback image filter
    const seen = new Set();
    this.galleryItems = items.filter(it => {
      if (!it.image) return false;
      if (seen.has(it.image)) return false;
      seen.add(it.image);
      return true;
    });
  }

  /* ---------- Modal Controls ---------- */
  openModal(index: number) {
    if (!this.galleryItems.length) return;
    this.modalIndex = Math.max(0, Math.min(index, this.galleryItems.length - 1));
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  prevImage() {
    this.modalIndex = (this.modalIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
  }

  nextImage() {
    this.modalIndex = (this.modalIndex + 1) % this.galleryItems.length;
  }

  viewAt(index: number) {
    if (index >= 0 && index < this.galleryItems.length) this.modalIndex = index;
  }

  get currentModalImage(): string {
    return this.galleryItems[this.modalIndex]?.image || '';
  }

  get currentModalTitle(): string {
    return this.galleryItems[this.modalIndex]?.title || '';
  }

  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (!this.isModalOpen) return;
    if (event.key === 'Escape') this.closeModal();
    else if (event.key === 'ArrowLeft') this.prevImage();
    else if (event.key === 'ArrowRight') this.nextImage();
  }

  onOverlayClick(evt: MouseEvent) {
    const t = evt.target as HTMLElement;
    if (t.classList.contains('gallery-modal') || t.classList.contains('ssg-overlay')) {
      this.closeModal();
    }
  }
}
