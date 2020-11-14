// import { css, FlattenSimpleInterpolation } from 'styled-components';
import { css } from '@emotion/css';
// import { tokens } from '@interact/tokens';

import { PropsStyle } from './Button.types';

export function style(props: any) {
  return css`
    position: relative;
    border: 1px solid var(--content-background-0);
    font-weight: 600;
    letter-spacing: 0.05rem;
    cursor: pointer;
    transition: 80ms;

    ${color(props)};
    ${size(props)};

    &:focus {
      outline: none;
    }

    &:hover {
      transform: scale(1.025);
    }

    &:active {
      transform: scale(0.9875);
    }
  `;
}

// function t(token, grade = null) {
//   const [key, value] = Object.entries(token)[0];
//   grade = grade || defaultGrade[key];

//   return 'var(--' + key + '-' + value + '-' + grade + ')';
// }

const token = {
  edge: {
    thickness: 2,
  },
  color: tt('var(--content-color-'),
  format: {
    primary: tt('var(--format-primary-'),
    positive: tt('var(--status-positive-'),
    negative: tt('var(--status-negative-'),
  },
};

function tt(str: any, defaultGrade: any = 500) {
  return (grade: number) => str + (grade ?? defaultGrade) + ')';
}

// const defaultGrade = {
//   format: 500,
//   content: 0,
// };

function color({ format = 'primary', variant, status }: PropsStyle) {
  // return css`
  //   ${t('background', 0)};
  //   ${t('color')};
  // `;

  const presentation = status ? status : format;

  const color = token.format[presentation](500);
  const blank = token.color(0);

  switch (variant) {
    case 'outline':
      return css`
        background: ${blank};
        border-color: ${color};
        color: ${color};
      `;

    case 'minimal':
      return css`
        background: ${blank};
        border-color: ${blank};
        color: ${color};
      `;
    default:
      return css`
        background: ${color};
        border-color: ${color};
        color: ${blank};
      `;
  }
}

const tokenBorderRadius = (size, curvature = 2, base = 0.25) =>
  size / curvature + base;

function size({ size }: { size: number }) {
  const fontSize = size / 1000 + 0.5;
  const borderRadius = tokenBorderRadius(fontSize, 5, 0);
  const borderSize = token.edge.thickness * (size / 1500) + 1;

  const pad = fontSize / 2 + 0.25;
  const padding = { x: pad * 2, y: pad };

  // const height = tokens.size(size);

  return css`
    font-size: ${fontSize}rem;
    border-radius: ${borderRadius}rem;
    border-width: ${borderSize}px;
    padding: ${padding.y}rem ${padding.x}rem;
  `;
}

// function useTheme(
//   tokens: string[],
//   ...styles: FlattenSimpleInterpolation
// ) {
//   return css`
//     ${tokens.map((token) => `${token}: var(--content-${token}-0);`)}
//     ${styles}
//   `;
// }

// type ThemeToken = string;

// function t(
//   token: ThemeToken,
//   grade: number = 0,
//   category = 'content',
// ) {
//   return `${token}: var(--${category}-${token}-${grade})`;
// }
