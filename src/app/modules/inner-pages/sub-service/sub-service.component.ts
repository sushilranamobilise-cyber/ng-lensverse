import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InnerBannerComponent } from '../../../shared/components/inner-banner/inner-banner.component';
import { ServiceBannersComponent } from '../../../shared/components/service-banners/service-banners.component';

type Feature = { title: string; subtitle?: string; icon?: string };
type SubData = {
  id: string;
  title: string;
  description?: string;
  longDescription?: string;
  image?: string;
  features?: Feature[];
  gallery?: string[];
};
type ServiceItem = {
  id: number;
  title: string;
  description?: string;
  image?: string;
  img?: string; img2?: string; img3?: string; img4?: string; img5?: string; img6?: string;
  title2?: string; title3?: string; title4?: string; title5?: string; title6?: string; title7?: string;
  text2?: string; text3?: string; text4?: string; text5?: string; text6?: string; text7?: string;
};

@Component({
  selector: 'app-sub-service',
  standalone: true,
  imports: [CommonModule, RouterModule, InnerBannerComponent, ServiceBannersComponent],
  templateUrl: './sub-service.component.html',
  styleUrls: ['./sub-service.component.scss']
})
export class SubServiceComponent implements OnInit {
  serviceId!: number | null;
  subId!: string | null;
  serviceData: ServiceItem | null = null;
  subData: SubData | null = null;

  // default features used when specific features aren't present
  defaultFeatures: Feature[] = [
    { title: 'High-resolution photos', subtitle: '20+ images, edited' },
    { title: 'Aerial footage', subtitle: 'Drone captures where allowed' },
    { title: 'Short promo video', subtitle: '30–60 sec highlight' },
    { title: 'Fast delivery', subtitle: '3–7 business days' }
  ];

  // temporary in-component data (you can move this to a shared file later)
  allServices: ServiceItem[] = [
    {
      id: 1,
      img: 'assets/images/services/vp/realstate.jpg',
      img2: 'assets/images/services/vp/corprate.jpg',
      img3: 'assets/images/services/vp/fesion.jpg',
      img4: 'assets/images/services/vp/automobiles.png',
      img5: 'assets/images/services/vp/dron_suit.jpg',
      img6: 'assets/images/services/vp/live_streeming.jpg',
      title: 'Visual Production',
      title2: 'Real Estate & Hospitality Shoots',
      title3: 'Corporate Shoots',
      title4: 'Fashion & Editorial Shoots',
      title5: 'Product & Automobile Shoots',
      title6: 'Drone Shoots',
      title7: 'Live Streaming & Broadcasting',
      text2: 'Showcase your property or hospitality business with high-quality photography and videography. Our expertise covers hotels, resorts, restaurants and cinematic walkthroughs.',
      text3: 'We provide end-to-end corporate photography and videography solutions to showcase your brand professionally.',
      text4: 'Our fashion and editorial services bring style, creativity, and storytelling to life.',
      text5: 'We provide high-quality product and automobile photography and videography designed to make your products stand out.',
      text6: 'Take your visuals to new heights with professional drone photography and videography.',
      text7: 'Engage your audience in real-time with our live streaming and broadcast services.'
    },
    {
      id: 2,
      title: 'Post-Production',
      img: 'assets/images/services/pp/main.jpg',
      img2: 'assets/images/services/pp/retouching.jpg',
      img3: 'assets/images/services/pp/video-editing.jpg',
      title2: 'Image Retouching & High-End Editing',
      title3: 'Video Editing & Motion Graphics',
      title4: 'Visual Effects (VFX)',
      text2: 'Enhance your visuals with professional image retouching and high-end editing.',
      text3: 'Transform raw footage into polished, engaging videos.',
      text4: 'Bring creativity to life with cutting-edge visual effects.'
    },
    {
      id: 3,
      title: 'AI & Machine Learning',
      img: 'assets/images/services/ai/main.jpg',
      title2: 'Data Annotation Services for AI & ML',
      text2: 'We provide precise and high-quality data annotation services to help train and improve AI and machine learning models.'
    },
    {
      id: 4,
      title: 'Brand & Influencer Content',
      img: 'assets/images/services/brand/main.jpg',
      title2: 'Content Creation for Brands & Influencers',
      text2: 'We help brands and influencers craft engaging content that resonates with their audience.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id') ? Number(params.get('id')) : null;
      this.subId = params.get('subId');

      // find parent service
      this.serviceData = this.allServices.find(s => s.id === this.serviceId) || null;

      // build rich subData object for the requested subId
      this.buildSubData();
    });
  }

  /** Convert a loose array that may contain undefined into a typed string[] (filters falsy/undefined) */
  private toStringArray(input?: Array<string | undefined | null>): string[] {
    if (!input || !Array.isArray(input)) return [];
    // filter out undefined/null/empty and assert string type
    return input.filter((x): x is string => typeof x === 'string' && x.length > 0);
  }

  private buildSubData() {
    this.subData = null;
    if (!this.serviceData) return;

    const map: Record<string, Partial<SubData>> = {
      'real-estate': {
        title: this.serviceData.title2 || 'Real estate',
        description: this.serviceData.text2 || '',
        image: this.serviceData.img || this.serviceData.image,
        longDescription:
          'We capture interiors and exteriors with attention to composition and light — ideal for listings, brochures and ads.',
        features: [
          { title: 'HDR interior photos', subtitle: 'Balanced highlights & shadows' },
          { title: 'Aerial views', subtitle: 'Drone photography for site context' },
          { title: 'Walkthrough video', subtitle: 'Smooth gimbal footage for virtual tours' }
        ],
        gallery: this.toStringArray([this.serviceData.img, this.serviceData.img2, this.serviceData.img3])
      },
      'corporate': {
        title: this.serviceData.title3 || 'Corporate shoots',
        description: this.serviceData.text3 || '',
        image: this.serviceData.img2 || this.serviceData.img,
        longDescription: 'Corporate coverage: events, headshots, employer branding and conference reels.',
        features: [
          { title: 'Event coverage', subtitle: 'Conferences, seminars & webinars' },
          { title: 'Headshots & portraits', subtitle: 'Studio and environmental portraits' }
        ],
        gallery: this.toStringArray([this.serviceData.img2, this.serviceData.img3])
      },
      'fashion': {
        title: this.serviceData.title4 || 'Fashion & Editorial',
        description: this.serviceData.text4 || '',
        image: this.serviceData.img3 || this.serviceData.img,
        longDescription: 'Campaigns, lookbooks and editorial photography with creative direction and styling.',
        features: [
          { title: 'Studio & location shoots', subtitle: 'Lighting & styling' },
          { title: 'Model direction', subtitle: 'Pose & storytelling' }
        ],
        gallery: this.toStringArray([this.serviceData.img3, this.serviceData.img4])
      },
      'automobile': {
        title: this.serviceData.title5 || 'Product & Automobile Shoots',
        description: this.serviceData.text5 || '',
        image: this.serviceData.img4 || this.serviceData.img,
        longDescription: 'High-detail product and automotive imagery with controlled lighting, turntables and motion shots.',
        features: [
          { title: '360º product spins', subtitle: 'Interactive 3D turntables' },
          { title: 'Studio & location', subtitle: 'Controlled light setups' }
        ],
        gallery: this.toStringArray([this.serviceData.img4, this.serviceData.img5])
      },
      'drone': {
        title: this.serviceData.title6 || 'Drone Shoots',
        description: this.serviceData.text6 || '',
        image: this.serviceData.img5 || this.serviceData.img,
        longDescription: 'Aerial cinematography for real estate, events and promotional videos.',
        features: [
          { title: 'Aerial photos & video', subtitle: 'Cinematic compositions' },
          { title: 'Survey & mapping', subtitle: 'Optional geo-tagging' }
        ],
        gallery: this.toStringArray([this.serviceData.img5, this.serviceData.img])
      },
      'live-stream': {
        title: this.serviceData.title7 || 'Live Streaming & Broadcasting',
        description: this.serviceData.text7 || '',
        image: this.serviceData.img6 || this.serviceData.img,
        longDescription: 'Live multi-camera production, encoding and stream delivery to multiple platforms.',
        features: [
          { title: 'Multi-camera', subtitle: 'Professional switching & audio' },
          { title: 'Platform delivery', subtitle: 'YouTube, Facebook, custom RTMP' }
        ],
        gallery: this.toStringArray([this.serviceData.img6, this.serviceData.img])
      }
    };

    if (this.subId && map[this.subId]) {
      const found = map[this.subId];
      this.subData = {
        id: this.subId,
        title: found.title || '',
        description: found.description || '',
        longDescription: found.longDescription || '',
        image: found.image || '',
        features: found.features || this.defaultFeatures,
        gallery: this.toStringArray(found.gallery || [found.image || this.serviceData.img])
      };
      return;
    }

    // fallback: use first mapped sub
    const fallbackKey = Object.keys(map)[0];
    const f = map[fallbackKey];
    this.subData = {
      id: fallbackKey,
      title: f.title || this.serviceData.title || 'Service',
      description: f.description || this.serviceData.text2 || this.serviceData.description || '',
      longDescription: f.longDescription || '',
      image: f.image || this.serviceData.img || this.serviceData.image,
      features: f.features || this.defaultFeatures,
      gallery: this.toStringArray(f.gallery || [f.image || this.serviceData.img || this.serviceData.image])
    };
  }

  // form submit handler used by template
  onSubmitQuote(evt: Event) {
    evt.preventDefault();
    alert('Thanks — request received. We will contact you soon.');
  }
}
