import React, {
  createElement,
  ReactHTML,
  ReactSVG,
  useState,
  FocusEventHandler,
  // CSSProperties,
} from 'react';
import { View } from 'react-native';
// import { FlattenSimpleInterpolation } from 'styled-components';
import { css, cx } from 'emotion';

type Platform = 'droid' | 'iOS' | 'web';
const platform: Platform = 'web';

type WebElement = keyof ReactHTML | keyof ReactSVG;

interface Props {
  element: WebElement;
  children?: any;
  className?: string;
  css?: string;
  focusable?: boolean;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
}

export function Node({
  children: cD,
  className: cN,
  css,
  element,
  onBlur: blur,
  onFocus: focus,
  ...props
}: Props) {
  const [focused, focusedSet] = useState(false);
  const nodeType = useElement(element);
  const a11yProps = useA11y(props);

  const className = cx(cN, css);

  const onBlur = callback(blur, () => focusedSet(false));
  const onFocus = callback(focus, () => focusedSet(true));

  const children = (
    <>
      {cD}
      {focused && <Focus />}
    </>
  );

  return createElement(nodeType as string, {
    children,
    className,
    onBlur,
    onFocus,
    ...a11yProps,
    ...props,
  });
}

function callback(
  cb: ((args: any) => any) | undefined,
  fn: (args: any) => any,
) {
  return (args: any) => {
    fn(args);
    cb && cb(args);
  };
}

function Focus() {
  return (
    <div
      className={css`
        top: -0.3rem;
        left: -0.3rem;
        border: 2px solid var(--format-primary-500);
        width: calc(100% + 0.6rem);
        height: calc(100% + 0.6rem);
        position: absolute;
        border-radius: inherit;
      `}
    />
  );
}

function useA11y(props: any) {
  if (platform === 'droid') return droidA11y(props);
  if (platform === 'iOS') return iOSA11y(props);
  if (platform === 'web') return webA11y(props);
}

function webA11y(props: any) {
  return props;
}

function iOSA11y(props: any) {
  return props;
}

function droidA11y(props: any) {
  return props;
}

function useElement(element: WebElement) {
  if (platform === 'web') return element;

  return native(element);
}

function native(element: WebElement) {
  if (element === 'a') return View;
  if (element === 'div') return View;
  if (element === 'span') return View;
  // etc, etc, etc...
}
