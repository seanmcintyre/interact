import { useMemo } from 'react';

export function useCSS<PropsStyle>(
  style: (propsStyle: PropsStyle) => string,
  propsStyle: PropsStyle,
) {
  return useMemo(() => style(propsStyle), Object.values(propsStyle));
}
