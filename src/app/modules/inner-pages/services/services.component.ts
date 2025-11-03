import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";
import { AuthRoutingModule } from "../../auth/auth-routing.module";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, InnerBannerComponent, AuthRoutingModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  
  allServices = [
    {
      title: 'Visual Production',
      text: 'High-quality corporate photography & videography.',
      icon: 'icon-04',
      buttonIcon: 'icon-05',
      link: ''
    },
    {
      title: 'Post-Production',
      text: 'Editing, color grading, motion & cinematic finishing.',
      icon: 'icon-08',
      buttonIcon: 'icon-05',
      link: ''
    },
    {
      title: 'AI & Machine Learning ',
      text: 'Smart, AI-powered creative storytelling.',
      icon: 'icon-12',
      buttonIcon: 'icon-05',
      link: ''
    },
    {
      title: 'Brand & Influencer Content',
      text: 'Engaging content for brands & creators.',
      icon: 'icon-04',
      buttonIcon: 'icon-05',
      link: ''
    },
    
  ];
}
