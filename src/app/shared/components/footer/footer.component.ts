import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../../modules/auth/auth-routing.module";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AuthRoutingModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
