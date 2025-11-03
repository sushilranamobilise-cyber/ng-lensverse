import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../modules/auth/auth-routing.module";
import { BannerSecComponent } from "../../shared/components/banner-sec/banner-sec.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [HeaderComponent, BannerSecComponent, AuthRoutingModule, FooterComponent],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {

}
