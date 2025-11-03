import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../modules/auth/auth-routing.module";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { Header2Component } from "../../shared/components/header2/header2.component";

@Component({
  selector: 'app-only-header',
  standalone: true,
  imports: [Header2Component, AuthRoutingModule, FooterComponent],
  templateUrl: './only-header.component.html',
  styleUrl: './only-header.component.scss'
})
export class OnlyHeaderComponent {

}
