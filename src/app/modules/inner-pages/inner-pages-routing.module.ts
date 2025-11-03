import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesComponent } from './services/services.component';
import { SubServiceComponent } from './sub-service/sub-service.component';


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
    },
    {
      path: 'gallery',
      component:GalleryComponent,
      data: { bannerTitle: 'Gallery', bannerText: 'Gallery' }
    },
    {
      path: 'services/:id',
      component:ServiceDetailsComponent,
      data: { bannerTitle: 'Service Details', bannerText: 'Service Details' }
    },
    {
      path: 'sub-service',
      component:SubServiceComponent,
      data: { bannerTitle: 'Sub Service', bannerText: 'Service Details' }
    },
    {
      path: 'blog/blog-details',
      component:BlogsDetailsComponent,
      data: { bannerTitle: 'Blog Details', bannerText: 'Blog Details' }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerPagesRoutingModule { }
