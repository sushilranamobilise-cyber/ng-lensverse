import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { AuthRoutingModule } from "../../auth/auth-routing.module";

declare var $: any; // jQuery

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, AuthRoutingModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent implements AfterViewInit {

  CliensLogo = [
    { id: 1, src: 'assets/images/clients/adobe.svg', alt: 'Adobe' },
    { id: 2, src: 'assets/images/clients/agoda_logo.svg', alt: 'Agoda' },
    { id: 3, src: 'assets/images/clients/belvilla_logo.svg', alt: 'Belvilla' },
    { id: 4, src: 'assets/images/clients/club_mahindra.svg', alt: 'Club Mahindra' },
    { id: 5, src: 'assets/images/clients/havells.svg', alt: 'Havells' },
    { id: 6, src: 'assets/images/clients/kwality.svg', alt: 'Kwality' },
    { id: 7, src: 'assets/images/clients/lemon_tree.svg', alt: 'Lemon Tree' },
    { id: 8, src: 'assets/images/clients/makemytrip.svg', alt: 'MakeMyTrip' },
    { id: 9, src: 'assets/images/clients/oyo.svg', alt: 'OYO' },
    { id: 10, src: 'assets/images/clients/IATAlogo.svg', alt: 'IATA' }
  ];

  groupedLogos: any[][] = [];

  constructor() {
    this.groupLogos();
  }

  groupLogos() {
    const perSlide = window.innerWidth < 768 ? 1 : 5;
    this.groupedLogos = [];
    for (let i = 0; i < this.CliensLogo.length; i += perSlide) {
      this.groupedLogos.push(this.CliensLogo.slice(i, i + perSlide));
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.groupLogos();
  }

  ngAfterViewInit() {
    // Initialize Bootstrap carousel manually
    $('#clientCarousel').carousel({
      interval: 2000,
      ride: 'carousel',
      wrap: true
    });
  }
}
