
export type Category = 'Notion' | 'Canva' | 'UI Kit' | 'Lightroom' | 'Bundle';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  image: string;
  features: string[];
  isBestValue?: boolean;
  downloadUrl?: string; // New property for the actual product file
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
