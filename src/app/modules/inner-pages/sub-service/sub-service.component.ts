import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";

@Component({
  selector: 'app-sub-service',
  standalone: true,
  imports: [ CommonModule, InnerBannerComponent],
  templateUrl: './sub-service.component.html',
  styleUrl: './sub-service.component.scss'
})
export class SubServiceComponent {
  
}