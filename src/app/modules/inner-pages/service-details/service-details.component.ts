import { CommonModule } from '@angular/common'; // 👈 Required for *ngIf, *ngFor
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InnerBannerComponent } from "../../../shared/components/inner-banner/inner-banner.component";
import { ServiceBannersComponent } from "../../../shared/components/service-banners/service-banners.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, InnerBannerComponent, RouterModule, ServiceBannersComponent], // 👈 CommonModule add
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'] // 👈 styleUrls (array) use karo
})
export class ServiceDetailsComponent implements OnInit {

  serviceId: number | null = null;
  serviceData: any;

  allServices = [
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
      // text2: 'Showcase your property or hospitality business with high-quality photography and videography. Our expertise covers: Hotels, resorts, and restaurants Food photography and videography Commercial property shoots HDR technique for stunning, vibrant imagery  videos highlighting hospitality and amenities We capture spaces and experiences that leave a lasting impression on potential clients and guests.',
      text3: 'We provide end-to-end corporate photography and videography solutions to showcase your brand professionally. Our services include: Corporate photo and video shoots Webinar recordings and live streaming Employee testimonials and interviews  Conference and seminar coverage Whether it’s for marketing campaigns, internal communications, or brand storytelling, we ensure your corporate visuals are polished, engaging, and impactful.',
      text4: 'Our fashion and editorial services bring style, creativity, and storytelling to life. We specialize in: Fashion lookbooks and catalog shoots Editorial campaigns for magazines or brands Model portfolios and creative concepts Studio and outdoor photography setups From concept development to final visuals, we create compelling imagery that represents your fashion brand with flair and professionalism.',
      text5: 'We provide high-quality product and automobile photography and videography designed to make your products stand out. Our services include: E-commerce product photography Catalog and marketing visuals Automobile exterior and interior shoots 360° product videos and promotional content Perfect for online stores, advertisements, and brand campaigns, our visuals highlight every detail with precision.',
      text6: 'Take your visuals to new heights with professional drone photography and videography. We offer: Aerial shots for real estate, hospitality, and events Cinematic promotional videos Scenic aerial photography for creative projects Our drone services provide unique perspectives that elevate your brand storytelling.',
      text7: 'Engage your audience in real-time with our live streaming and broadcast services. We handle: Corporate events and webinars Conferences and panel discussions Festivals and public events Multi-camera setups for professional broadcasts We ensure seamless, high-quality streaming experiences that connect you with your audience effectively.'
    },
    { 
      id: 2, 
      title: 'Post-Production', 
      title2: 'Image Retouching & High-End Editing',
      title3: 'Video Editing & Motion Graphics',
      title4: 'Visual Effects (VFX)',
      title5: 'Color Grading & Correction',
      title6: '2D/3D Animation',
      title7: 'Graphic Design & Layout Creation',
      title8: '3D Modeling for Products & Architecture',
      text2: 'Enhance your visuals with professional image retouching and high-end editing.',
      text3: 'Transform raw footage into polished, engaging videos. Our video editing services include motion graphics, transitions, and dynamic storytelling that captivate your audience and elevate your brand.',
      text4: 'Bring creativity to life with cutting-edge visual effects. From compositing to CGI integration, our VFX services add cinematic quality and unique flair to your videos and films.',
      text5: 'Set the perfect mood with professional color grading and correction. We enhance visuals with precise color tones, contrast, and mood adjustments to make every frame look stunning and cohesive.',
      text6: 'Communicate ideas creatively with 2D and 3D animations. We create animated explainer videos, promotional content, and motion visuals that make your brand message clear and memorable.',
      text7: 'From digital graphics to print layouts, our design team delivers eye-catching visuals that reflect your brand identity. Services include posters, brochures, banners, social media content, and more.', 
      text8: 'Visualize products and architectural designs with detailed 3D modeling. Our services include photorealistic renderings, product prototypes, and architectural visualizations that impress clients and stakeholders.' 
    },
    { 
      id: 3, 
      title: 'AI & Machine Learning',
      title2: 'Data Annotation Services for AI & ML',
      title3: '',
      title4: '',
      title5: '',
      title6: '',
      title7: '',
      text2: 'We provide precise and high-quality data annotation services to help train and improve AI and machine learning models. Our services include:',
      text3: 'Image & Video Annotation: Object detection, segmentation, and labeling for computer vision models.',
      text4: 'Text Annotation: Sentiment analysis, entity recognition, and categorization for NLP applications.',
      text5: 'Audio & Speech Annotation: Transcription, speech labeling, and sound event tagging.',
      text6: '3D Point Cloud Annotation: Labeling and segmentation for autonomous vehicles and robotics.',
      text7: 'Custom Annotation Projects: Tailored solutions to meet your AI/ML dataset requirements.', 
      text8: 'Our skilled team ensures accuracy, consistency, and fast turnaround, enabling your AI models to achieve better performance and reliability.' 
    },
    { 
      id: 4, 
      title: 'Brand & Influencer Content', 
      title2: 'Content Creation for Brands & Influencers',
      title3: 'Scriptwriting, Content Planning & Strategy',
      title4: 'Short-Form Video Production (Reels, Shorts)',
      title5: 'Voiceover Recording & Audio Narration',
      title6: 'Editing Packages for Content Creators',
      title7: 'Campaign Ideation and Creative Direction',
      text2: 'We help brands and influencers craft engaging content that resonates with their audience. Our services include:',
      text3: 'Develop compelling scripts, plan content calendars, and create strategies to maximize engagement and reach for your brand or personal profile.',
      text4: 'Produce high-quality, attention-grabbing short-form videos optimized for social media platforms like Instagram, YouTube, and Linkedin.',
      text5: 'Add professional voiceovers and audio narration to your content for a polished, impactful presentation.',
      text6: 'Customized editing services including cuts, transitions, effects, and branding to make your content stand out.',
      text7: 'From brainstorming concepts to executing full campaigns, we provide creative direction to bring your brand stories to life.' 
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.serviceId = Number(params.get('id'));
    this.serviceData = this.allServices.find(s => s.id === this.serviceId);
  });
}

}
