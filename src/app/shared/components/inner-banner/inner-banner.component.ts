import { Component, Input } from '@angular/core';
import { AuthRoutingModule } from "../../../modules/auth/auth-routing.module";

@Component({
  selector: 'app-inner-banner',
  standalone: true,
  imports: [AuthRoutingModule],
  templateUrl: './inner-banner.component.html',
  styleUrl: './inner-banner.component.scss'
})
export class InnerBannerComponent {
[x: string]: any;
  @Input() title = '';
  @Input() paragraph = '';
}
