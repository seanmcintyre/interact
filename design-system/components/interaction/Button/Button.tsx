import React, { useMemo } from 'react';

import { style } from './Button.style';

import { Node } from '../../Node';
// import { useCSS } from '../../useCSS';

// export function Button({ ...props }) {
//   return <Node accessibilityRole="button" {...props} />;
// }

interface Props {
  children?: any;
  className?: string;
  element?: 'a' | 'button' | 'span';
  format?: 'primary';
  size?: number;
  status?: 'positive' | 'negative';
  variant?: 'common' | 'outline';
}

export function Button({
  element = 'button',
  format = 'primary',
  size = 500,
  status,
  variant = 'common',
  ...props
}: Props) {
  const css = useCSS(style, { format, status, size, variant });

  return <Node element={element} css={css} {...props} />;
}

function useCSS(style: (props: any) => string, props: any) {
  return useMemo(() => style(props), Object.values(props));
}
