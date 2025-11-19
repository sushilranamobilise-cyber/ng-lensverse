export interface SubService {
  id: string;
  title: string;
  description?: string;
  longDescription?: string;
  image?: string;
  features?: { title: string; subtitle?: string }[];
  gallery?: string[];
}

export interface Service {
  id: number;
  title: string;
  description?: string;
  image?: string;
  subServices: SubService[];
}

export const ALL_SERVICES: Service[] = [
  {
    id: 1,
    title: 'Visual Production',
    description: 'High-quality corporate photography & videography.',
    image: 'assets/images/services/vp/realstate.jpg',
    subServices: [
      { id: 'real-estate', title: 'Real Estate & Hospitality Shoots', description: 'Showcase your property with cinematic visuals.', image: 'assets/images/services/vp/realstate.jpg' },
      { id: 'corporate', title: 'Corporate Shoots', description: 'Professional corporate video and photo coverage.', image: 'assets/images/services/vp/corprate.jpg' },
      { id: 'fashion', title: 'Fashion & Editorial Shoots', description: 'Creative fashion & editorial photo shoots.', image: 'assets/images/services/vp/fesion.jpg' },
      { id: 'automobile', title: 'Product & Automobile Shoots', description: 'High-end product & automobile photography.', image: 'assets/images/services/vp/automobiles.png' },
      { id: 'drone', title: 'Drone Shoots', description: 'Aerial photography and videography services.', image: 'assets/images/services/vp/dron_suit.jpg' },
      { id: 'live-stream', title: 'Live Streaming & Broadcasting', description: 'Professional live streaming services.', image: 'assets/images/services/vp/live_streeming.jpg' }
    ]
  },
  {
    id: 2,
    title: 'AI & ML Data Labelling',
    description: 'Smart, AI-powered creative services and data annotation.',
    image: 'assets/images/services/ai/data-annotation-for-AI-&-ML1.png',
    subServices: [
      { id: 'data-annotation', title: 'Data Annotation for AI & ML', description: 'High-quality dataset labeling for AI models.', image: 'assets/images/services/ai/data-annotation-for-AI-&-ML1.png' },
      { id: 'nlp', title: 'Text Annotation & NLP', description: 'Entity recognition & sentiment tagging.', image: 'assets/images/services/ai/text-annotation &-NLP2.png' },
      { id: 'speech', title: 'Audio & Speech Annotation', description: 'Transcription, labeling & tagging services.', image: 'assets/images/services/ai/audio-&-speech-annotation1.png' }
    ]
  },
  {
    id: 3,
    title: 'Post-Production',
    description: 'Editing, color grading, animation & VFX services.',
    image: 'assets/images/services/pp/Image-Retouching-&-High-End-Editing1.png',
    subServices: [
      { id: 'retouching', title: 'Image Retouching & High-End Editing', description: 'Professional image clean-up & color correction.', image: 'assets/images/services/pp/Image-Retouching-&-High-End-Editing3.png' },
      { id: 'video-editing', title: 'Video Editing & Motion Graphics', description: 'Professional editing & dynamic motion graphics.', image: 'assets/images/services/pp/Video-editing-&-Motion-Graphics.png' },
      { id: 'vfx', title: 'Visual Effects (VFX)', description: 'Compositing, CGI & visual integration.', image: 'assets/images/services/pp/Visual-effects-VFX1.png' },
      { id: 'color-grading', title: 'Color Grading & Correction', description: 'Professional color grading for perfect tones.', image: 'assets/images/services/pp/color-grading-&-correction.png' },
      { id: 'animation', title: '2D / 3D Animation', description: 'Explainers, 2D/3D product animations.', image: 'assets/images/services/pp/2dvs3d-animation.jpg' },
      { id: 'graphic-design', title: 'Graphic Design & Layout', description: 'Designs for social media & marketing.', image: 'assets/images/services/pp/graphic-design-&-layout1.jpg' }
    ]
  },
  {
    id: 4,
    title: 'Brand & Influencer Content',
    description: 'Engaging content for brands & creators.',
    image: 'assets/images/services/brand/content-creation for-Brands-&-Influencer1.png',
    subServices: [
      { id: 'content-creation', title: 'Content Creation for Brands & Influencers', description: 'High-quality videos for social media.', image: 'assets/images/services/brand/content-creation for-Brands-&-Influencer1.png' },
      { id: 'scriptwriting', title: 'Scriptwriting & Strategy', description: 'Creative scripting & campaign planning.', image: 'assets/images/services/brand/scriptwriting-&-strategy1.png' },
      { id: 'editing-packages', title: 'Editing Packages for Creators', description: 'Fast video editing packages for influencers.', image: 'assets/images/services/brand/editing-package-for-creators1.png' }
    ]
  }
];
