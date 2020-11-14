import React from 'react';

import { style } from './Button.style';
import { Props } from './Button.types';

import { Node, useCSS } from '../../../core';

export function Button({
  element = 'button',
  format = 'primary',
  size = 500,
  status,
  variant = 'common',
  ...props
}: Props) {
  const css = useCSS(style, { format, status, size, variant });

  return (
    <Node
      // accessibilityRole="button"
      element={element}
      css={css}
      {...props}
    />
  );
}
