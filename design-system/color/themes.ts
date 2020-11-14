import { css } from 'styled-components';
// import { css } from '@emotion/css';

import { spectrum } from '@interact/tokens';

import { white, black, blue, green, red } from './color';

const tokenSet = spectrum('react');

export const themes = {
  light: css`
    ${tokenSet({
      series: 'content',
      specimen: 'color',
      start: white,
      end: black,
    })};

    ${tokenSet({
      series: 'content',
      specimen: 'background',
      start: black,
      end: white,
    })};

    ${tokenSet({
      series: 'format',
      specimen: 'primary',
      start: black,
      median: blue,
      end: white,
    })};

    ${tokenSet({
      series: 'status',
      specimen: 'positive',
      start: black,
      median: green,
      end: white,
    })};

    ${tokenSet({
      series: 'status',
      specimen: 'negative',
      start: black,
      median: red,
      end: white,
    })};
  `,
  dark: css`
    ${tokenSet({
      series: 'content',
      specimen: 'color',
      start: black,
      end: white,
    })};

    ${tokenSet({
      series: 'content',
      specimen: 'background',
      start: white,
      end: black,
    })};

    ${tokenSet({
      series: 'format',
      specimen: 'primary',
      start: white,
      median: blue,
      end: black,
    })};

    ${tokenSet({
      series: 'status',
      specimen: 'positive',
      start: white,
      median: green,
      end: black,
    })};

    ${tokenSet({
      series: 'status',
      specimen: 'negative',
      start: white,
      median: red,
      end: black,
    })};
  `,
};

// content.color
// content.background

// format.primary
// format.secondary
// formay.tertiary

// status.positive
// status.negative

// ---------

// padding
// edge (border-radius, box, box-shadow)
// speed (animation, transition)

// fonts
// typography.header
// typography.text
// typography.pre
