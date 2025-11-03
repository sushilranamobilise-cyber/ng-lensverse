import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-banners',
  standalone: true,
  imports: [],
  templateUrl: './service-banners.component.html',
  styleUrl: './service-banners.component.scss'
})
export class ServiceBannersComponent {
[x: string]: any;
  @Input() title = '';
  @Input() paragraph = '';
}
