import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes'; // 👈 routes ka path check kar lo

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),          // ✅ replaces deprecated HttpClientModule
    provideRouter(routes)      // ✅ routing provide karne ke liye
  ]
})
.catch((err) => console.error(err));
