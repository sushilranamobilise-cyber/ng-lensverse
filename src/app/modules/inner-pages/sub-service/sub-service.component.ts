import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ALL_SERVICES, Service, SubService } from '../../../data/services.data'; // <-- adjust if required
import { InnerBannerComponent } from '../../../shared/components/inner-banner/inner-banner.component';
import { ServiceBannersComponent } from '../../../shared/components/service-banners/service-banners.component';

@Component({
  selector: 'app-sub-service',
  standalone: true,
  imports: [CommonModule, RouterModule, InnerBannerComponent, ServiceBannersComponent],
  templateUrl: './sub-service.component.html',
  styleUrls: ['./sub-service.component.scss']
})
export class SubServiceComponent implements OnInit {
  serviceId!: number | null;
  subId!: string | null;

  /* Data holders */
  allServices: Service[] = ALL_SERVICES;
  serviceData: Service | null = null;
  subData: SubService | null = null;

  /* Fallback features */
  defaultFeatures = [
    { title: 'High-resolution photos', subtitle: '20+ images, edited' },
    { title: 'Aerial footage', subtitle: 'Drone captures where allowed' },
    { title: 'Short promo video', subtitle: '30–60 sec highlight' },
    { title: 'Fast delivery', subtitle: '3–7 business days' }
  ];

  /* Modal state */
  isModalOpen = false;
  modalIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id') ? Number(params.get('id')) : null;
      this.subId = params.get('subId');

      // load parent service
      this.serviceData = this.allServices.find(s => s.id === this.serviceId) || null;

      // load subData
      if (this.serviceData && this.subId) {
        this.subData = (this.serviceData.subServices || []).find(ss => ss.id === this.subId) || null;
      } else {
        this.subData = null;
      }

      // ensure features exist
      if (this.subData && (!this.subData.features || this.subData.features.length === 0)) {
        this.subData.features = this.defaultFeatures;
      }
    });
  }

  /* ---------------- Helpers ---------------- */

  getGallery(): string[] {
    if (!this.subData) return [];
    const gallery = Array.isArray(this.subData.gallery) && this.subData.gallery.length ? this.subData.gallery.slice() : [];
    if (!gallery.length && this.subData.image) gallery.push(this.subData.image);
    if (!gallery.length && this.serviceData?.image) gallery.push(this.serviceData.image as string);
    return gallery.filter((x): x is string => !!x && typeof x === 'string' && x.trim().length > 0);
  }

  getTitle(): string {
    return this.subData?.title || this.serviceData?.title || 'Service';
  }

  get currentModalImage(): string | null {
    const g = this.getGallery();
    return g[this.modalIndex] || null;
  }

  /* ---------------- Modal controls ---------------- */

  openModal(index: number) {
    const g = this.getGallery();
    if (!g.length) return;
    this.modalIndex = Math.max(0, Math.min(index, g.length - 1));
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  prevImage() {
    const g = this.getGallery();
    if (!g.length) return;
    this.modalIndex = (this.modalIndex - 1 + g.length) % g.length;
  }

  nextImage() {
    const g = this.getGallery();
    if (!g.length) return;
    this.modalIndex = (this.modalIndex + 1) % g.length;
  }

  viewAt(index: number) {
    const g = this.getGallery();
    if (!g.length) return;
    if (index < 0 || index >= g.length) return;
    this.modalIndex = index;
  }

  onOverlayClick(evt: MouseEvent) {
    const t = evt.target as HTMLElement;
    if (t.classList.contains('gallery-modal') || t.classList.contains('ssg-overlay')) {
      this.closeModal();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.isModalOpen) return;
    if (event.key === 'Escape') this.closeModal();
    else if (event.key === 'ArrowLeft') this.prevImage();
    else if (event.key === 'ArrowRight') this.nextImage();
  }
}
