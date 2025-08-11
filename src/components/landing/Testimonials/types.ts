export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}