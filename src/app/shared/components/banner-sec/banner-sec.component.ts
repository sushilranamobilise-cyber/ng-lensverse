import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-banner-sec',
  standalone: true,
  imports: [],
  templateUrl: './banner-sec.component.html',
  styleUrl: './banner-sec.component.scss'
})
export class BannerSecComponent {

  ngAfterViewInit(): void {
  // Banner carousel
  if ($('.banner-carousel').length) {
    $('.banner-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 1000,
      autoplay: true,
      navText: ['<span class="icon-05"></span>', '<span class="icon-06"></span>'],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        800: { items: 1 },
        1024: { items: 1 }
      }
    });
  }

  // Brand carousel example
  if ($('.brand-carousel').length) {
    $('.brand-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1200: { items: 4 }
      }
    });
  }
}

}
