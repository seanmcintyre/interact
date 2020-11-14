import { CSS } from '../CSS';

export function size(grade: number) {
  return CSS.round(grade * 0.006);
}
