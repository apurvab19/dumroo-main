import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}