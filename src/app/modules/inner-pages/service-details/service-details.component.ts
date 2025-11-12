import { CommonModule } from '@angular/common'; // 👈 Required for *ngIf, *ngFor
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";
import { ServiceBannersComponent } from "../../../shared/components/service-banners/service-banners.component";

/** ---------- Types ---------- */
interface SubService {
  id: string;            // url slug / key, e.g. 'real-estate'
  title: string;
  description?: string;
  image?: string;
}

interface Service {
  id: number;
  title: string;
  description?: string;
  image?: string;         // main image
  imageAlt?: string;
  subServices: SubService[];
}

/** ---------- Data (professional) ---------- */
const ALL_SERVICES: Service[] = [
  {
    id: 1,
    title: 'Visual Production',
    description: 'High-quality corporate photography & videography.',
    image: 'assets/images/services/vp/realstate.jpg',
    subServices: [
      {
        id: 'real-estate',
        title: 'Real Estate & Hospitality Shoots',
        description: 'Showcase your property or hospitality business with high-quality photography and cinematic videography for hotels, resorts and commercial spaces.',
        image: 'assets/images/services/vp/realstate.jpg'
      },
      {
        id: 'corporate',
        title: 'Corporate Shoots',
        description: 'Professional corporate photography and videography — conferences, events, employee testimonials and brand films.',
        image: 'assets/images/services/vp/corprate.jpg'
      },
      {
        id: 'fashion',
        title: 'Fashion & Editorial Shoots',
        description: 'Fashion lookbooks, editorial campaigns and model portfolios with creative direction and studio/outdoor setups.',
        image: 'assets/images/services/vp/fesion.jpg'
      },
      {
        id: 'automobile',
        title: 'Product & Automobile Shoots',
        description: 'High-end product photography and automobile campaigns for catalogs, websites and ads.',
        image: 'assets/images/services/vp/automobiles.png'
      },
      {
        id: 'drone',
        title: 'Drone Shoots',
        description: 'Aerial photography & videography for real estate, events and cinematic projects.',
        image: 'assets/images/services/vp/dron_suit.jpg'
      },
      {
        id: 'live-stream',
        title: 'Live Streaming & Broadcasting',
        description: 'Multi-camera live streaming, webinars and event broadcasting solutions.',
        image: 'assets/images/services/vp/live_streeming.jpg'
      }
    ]
  },
  {
    id: 2,
    title: 'Post-Production',
    description: 'Editing, color grading, motion & cinematic finishing.',
    image: 'assets/images/services/pp/main.jpg',
    subServices: [
      {
        id: 'retouching',
        title: 'Image Retouching & High-End Editing',
        description: 'Professional retouching and high-end editing for stills and product photography.',
        image: 'assets/images/services/pp/retouching.jpg'
      },
      {
        id: 'video-editing',
        title: 'Video Editing & Motion Graphics',
        description: 'Polish your footage with editing, motion graphics and storytelling edits.',
        image: 'assets/images/services/pp/video-editing.jpg'
      },
      {
        id: 'vfx',
        title: 'Visual Effects (VFX)',
        description: 'Compositing, CGI and creative VFX to add cinematic value to your projects.',
        image: 'assets/images/services/pp/vfx.jpg'
      },
      {
        id: 'color-grading',
        title: 'Color Grading & Correction',
        description: '专业级 colour grading to set the mood and tone for your videos.',
        image: 'assets/images/services/pp/color-grading.jpg'
      },
      {
        id: 'animation',
        title: '2D / 3D Animation',
        description: 'Explainers, product animations and motion design in 2D/3D.',
        image: 'assets/images/services/pp/animation.jpg'
      },
      {
        id: 'graphic-design',
        title: 'Graphic Design & Layout',
        description: 'Posters, banners and layouts for digital & print campaigns.',
        image: 'assets/images/services/pp/graphic.jpg'
      }
    ]
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    description: 'Smart, AI-powered creative services and data annotation.',
    image: 'assets/images/services/ai/main.jpg',
    subServices: [
      {
        id: 'data-annotation',
        title: 'Data Annotation for AI & ML',
        description: 'Image, video, text and audio annotation for training robust models.',
        image: 'assets/images/services/ai/data-annotation.jpg'
      },
      {
        id: 'nlp',
        title: 'Text Annotation & NLP',
        description: 'Entity labeling, sentiment tagging and other NLP annotations.',
        image: 'assets/images/services/ai/nlp.jpg'
      },
      {
        id: 'speech',
        title: 'Audio & Speech Annotation',
        description: 'Transcription, speaker labelling and audio event tagging.',
        image: 'assets/images/services/ai/speech.jpg'
      }
    ]
  },
  {
    id: 4,
    title: 'Brand & Influencer Content',
    description: 'Creative content for brands, influencers & creators.',
    image: 'assets/images/services/brand/main.jpg',
    subServices: [
      {
        id: 'content-creation',
        title: 'Content Creation for Brands & Influencers',
        description: 'Concept-to-delivery social videos, reels and brand storytelling.',
        image: 'assets/images/services/brand/content.jpg'
      },
      {
        id: 'scriptwriting',
        title: 'Scriptwriting & Strategy',
        description: 'Content strategy, scripting and campaign planning.',
        image: 'assets/images/services/brand/scriptwriting.jpg'
      },
      {
        id: 'editing-packages',
        title: 'Editing Packages for Creators',
        description: 'End-to-end editing packages optimized for platforms and formats.',
        image: 'assets/images/services/brand/editing.jpg'
      }
    ]
  }
];

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, InnerBannerComponent, RouterModule, ServiceBannersComponent],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  serviceId: number | null = null;
  serviceData: Service | null = null;

  // now typed and imported from constant above
  allServices: Service[] = ALL_SERVICES;

  // subCards derived from the selected service's subServices
  subCards: SubService[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id') ? Number(params.get('id')) : null;
      this.serviceData = this.allServices.find(s => s.id === this.serviceId) || null;

      if (this.serviceData && Array.isArray(this.serviceData.subServices)) {
        // use subServices directly (keeps data consistent)
        this.subCards = this.serviceData.subServices.slice(); // shallow copy
      } else {
        this.subCards = [];
      }
    });
  }

  // helper to navigate to a sub-service (programmatic)
  openSubService(subId: string) {
    if (this.serviceId != null) {
      this.router.navigate(['/home', 'services', this.serviceId, 'sub', subId]);
    }
  }
}
