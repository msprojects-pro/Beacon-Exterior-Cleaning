export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  postcode: string;
  message: string;
  preferredContact: "phone" | "email" | "whatsapp";
}
