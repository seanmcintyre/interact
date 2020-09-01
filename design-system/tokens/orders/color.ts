import chroma from 'chroma-js';
import { rgba } from 'polished';

function lcha(L: number, C: number, H: number, A: number) {
  const [R, G, B] = chroma.lch(L, C, H).rgba();
  return rgba(R, G, B, A);
}

export const color = {
  ui: {
    white: { value: lcha(150, 0, 0, 1) },
    black: { value: lcha(0, 0, 0, 1) },
    blue: { value: lcha(40, 90, 280, 1) },
    gray: { value: lcha(50, 0, 300, 1) },
    green: { value: lcha(70, 90, 160, 1) },
    red: { value: lcha(50, 80, 25, 1) },
  },
};
