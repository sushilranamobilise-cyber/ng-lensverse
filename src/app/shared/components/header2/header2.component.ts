import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../../modules/auth/auth-routing.module";
declare var $: any;
@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [AuthRoutingModule],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.scss'
})
export class Header2Component {
  
  constructor() { }

  ngAfterViewInit(): void {
    this.initHeaderScripts();
  }

  ngOnDestroy(): void {
    // Optional: cleanup if needed
    $(window).off('scroll');
    $(window).off('load');
  }

  private initHeaderScripts(): void {

    // Hide Preloader
    const handlePreloader = () => {
      if ($('.loader-wrap').length) {
        $('.loader-wrap').delay(1000).fadeOut(500);
      }
    };

    // Update Header Style on scroll
    const headerStyle = () => {
      if ($('.main-header').length) {
        const windowpos = $(window).scrollTop()!;
        const siteHeader = $('.main-header');
        const scrollLink = $('.scroll-top');

        if (windowpos >= 110) {
          siteHeader.addClass('fixed-header');
          scrollLink.addClass('open');
        } else {
          siteHeader.removeClass('fixed-header');
          scrollLink.removeClass('open');
        }
      }
    };

    // Scroll Top Button
    const handleScrollbar = () => {
      const bHeight = $('body').height()!;
      const scrolled = $(window).innerHeight()! + $(window).scrollTop()!;
      let percentage = ((scrolled / bHeight) * 100);
      if (percentage > 100) percentage = 100;
      $('.scroll-top-inner .bar-inner').css('width', percentage + '%');
    };

    // Preloader text rotation (example)
    $('.preloader-ring').each( () => {
      let text = $(this).text();
      let textArr = text.split('');
      let a = 0;
      $(this).html('');
      for (let i = 0; i <= 30; i++) {
        if (!textArr[i] || textArr[i] === " ") textArr[i] = "";
        $(this).append(`<div class="preloader-sector" style="transform: rotateY(${a}deg) translateZ(160px)">${textArr[i]}</div>`);
        a += 12;
      }
    });

    // Mobile menu toggle
    if ($('.mobile-menu').length) {
      const mobileMenuContent = $('.main-header .menu-area .main-menu').html();
      $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
      $('.sticky-header .main-menu').append(mobileMenuContent);

      $('.mobile-menu li.dropdown .dropdown-btn').on('click', (e: { currentTarget: any; }) => {
        $(e.currentTarget).toggleClass('open');
        $(e.currentTarget).prev('ul').slideToggle(500);
        $(e.currentTarget).prev('.megamenu').slideToggle(900);
      });

      $('.mobile-nav-toggler').on('click', () => {
        $('body').addClass('mobile-menu-visible');
      });

      $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', () => {
        $('body').removeClass('mobile-menu-visible');
      });
    }

    // Scroll to target
    $('.scroll-to-target').on('click', (e: { currentTarget: any; }) => {
      const target = $(e.currentTarget).data('target');
      if (target) {
        $('html, body').animate({ scrollTop: $(target).offset()!.top }, 1000);
      }
    });

    // Owl Carousel Example
    if ($('.brand-carousel').length) {
      ($('.brand-carousel') as any).owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 1000,
        autoplay: 6000,
        navText: ['<span class="icon-05"></span>', '<span class="icon-06"></span>'],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1200: { items: 2 },
          1500: { items: 3 },
          1600: { items: 4 }
        }
      });
    }

    // Document scroll event
    $(window).on('scroll', () => {
      headerStyle();
      handleScrollbar();
      if ($(window).scrollTop()! > 200) {
        $('.scroll-top-inner').addClass('visible');
      } else {
        $('.scroll-top-inner').removeClass('visible');
      }
    });

    // Window load
    $(window).on('load', () => {
      handlePreloader();
    });

    // Scroll top button click
    $('.scroll-top-inner').on('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 500);
      return false;
    });

  }
}