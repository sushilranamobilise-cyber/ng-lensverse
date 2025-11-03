import { Component, HostListener } from '@angular/core';
import 'owl.carousel';
import { AuthRoutingModule } from "../../../modules/auth/auth-routing.module";
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AuthRoutingModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() { }

  ngAfterViewInit(): void {
    this.initHeaderScripts();
    this.rotateText2();
    this.handleCountBar();
    this.observeAnimations();
     new WOW().init();
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
  rotateText2() {
    const textEl: HTMLElement | null = document.querySelector('.text_2');
    if (textEl) {
      const text = textEl.innerText;
      textEl.innerHTML = ''; // clear current content

      // rotate each character
      Array.from(text).forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.transform = `rotate(${i * 10}deg)`;
        textEl.appendChild(span);
      });
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleCountBar();
  }
  handleCountBar() {
      const countBars = document.querySelectorAll<HTMLElement>('.count-bar');

      countBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // check if element is visible in viewport
        if (rect.top <= windowHeight && !bar.classList.contains('counted')) {
          const percent = bar.dataset['percent'];
          if (percent) {
            bar.style.width = percent;
            bar.classList.add('counted'); // mark as animated
          }
        }
      });
    }
    observeAnimations() {
    const elements = document.querySelectorAll<HTMLElement>('.fade-in-up');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target); // ek baar animation ke baad unobserve
          }
        });
      },
      { threshold: 0.1 } // jab 10% element viewport me aaye
    );

    elements.forEach(el => observer.observe(el));
  }
}