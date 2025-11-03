import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
   {
      path: 'about',
      component:AboutPageComponent,
      data: { bannerTitle: 'About Us', bannerText: 'This is about page paragraph...' }
    },
    {
      path: 'services',
      component:ServicesComponent,
      data: { bannerTitle: 'Our Services', bannerText: 'This is services page paragraph...' }
    },
    {
      path: 'blog',
      component:BlogComponent,
      data: { bannerTitle: 'Blogs', bannerText: 'This is services page paragraph...' }
    },
    {
      path: 'contact',
      component:ContactComponent,
      data: { bannerTitle: 'Contact', bannerText: 'Contact Us' }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerPagesRoutingModule { }
