export interface NavItem {
  id: string;
  href: string;
  label: string;
  children?: NavItem[];
  external?: boolean;
}
