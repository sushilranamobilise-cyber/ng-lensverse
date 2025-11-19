import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceBannersComponent } from "../../../shared/components/service-banners/service-banners.component";

@Component({
  selector: 'app-inner-service',
  standalone: true,
  imports: [CommonModule, ServiceBannersComponent, RouterLink],
  templateUrl: './inner-service.component.html',
  styleUrls: ['./inner-service.component.scss']
})
export class InnerServiceComponent implements OnInit {

  // Bas array chahiye list ke liye
  allServices: any[] = [
    { id: 1, title: 'Visual Production' },
    { id: 2, title: 'Post-Production' },
    { id: 3, title: 'AI & ML Data Labelling' },
    { id: 4, title: 'Brand & Influencer Content' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
