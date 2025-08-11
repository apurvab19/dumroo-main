export type LogoVariant = 'symbol' | 'default' | 'full';

export interface LogoProps {
  variant?: LogoVariant;
  className?: string;
}