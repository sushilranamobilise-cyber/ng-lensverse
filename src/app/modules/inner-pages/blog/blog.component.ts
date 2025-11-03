import { Component } from '@angular/core';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";
import { AuthRoutingModule } from "../../auth/auth-routing.module";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [InnerBannerComponent, AuthRoutingModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
