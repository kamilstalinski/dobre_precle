export interface HamburgerProps {
  isActive: boolean;
  handleActive: () => void;
}

export interface ButtonProps {
  text: string;
  color?: string;
  link: string;
}
