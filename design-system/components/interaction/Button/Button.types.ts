export type Props = PropsLogic & PropsStyle;

export interface PropsLogic {
  children?: any;
  element?: 'a' | 'button' | 'span';
}

export interface PropsStyle {
  className?: string;
  format?: 'primary';
  size?: number;
  status?: 'positive' | 'negative';
  variant?: 'common' | 'outline' | 'minimal';
}
