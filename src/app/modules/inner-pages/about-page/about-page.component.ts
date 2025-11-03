import { Component } from '@angular/core';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [InnerBannerComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
