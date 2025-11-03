import { Component } from '@angular/core';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [InnerBannerComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
