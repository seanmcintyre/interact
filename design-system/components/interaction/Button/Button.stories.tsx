import React from 'react';
import { css } from '@emotion/css';

import { Button } from './Button';

export default {
  title: 'Components/Interaction/Button',
  component: Button,
};

const className = css`
  display: block;
  margin: 0 0 1rem 0;
`;

export function Common() {
  return (
    <>
      <Button size={500} className={className}>
        Button
      </Button>
    </>
  );
}

export function Size() {
  return (
    <>
      <Button size={0} className={className}>
        Button
      </Button>
      <Button size={200} className={className}>
        Button
      </Button>
      <Button size={400} className={className}>
        Button
      </Button>
      <Button size={600} className={className}>
        Button
      </Button>
      <Button size={800} className={className}>
        Button
      </Button>
      <Button size={1000} className={className}>
        Button
      </Button>

      <Button size={2000} className={className}>
        Button
      </Button>
    </>
  );
}

export function Format() {
  return (
    <>
      <Button format="primary" className={className}>
        Button
      </Button>
    </>
  );
}

export function Status() {
  return (
    <>
      <Button status="positive" className={className}>
        Button
      </Button>
      <Button status="negative" className={className}>
        Button
      </Button>
    </>
  );
}

export function Variant() {
  return (
    <>
      <Button variant="common" className={className}>
        Button
      </Button>
      <Button variant="outline" className={className}>
        Button
      </Button>
      <Button variant="minimal" className={className}>
        Button
      </Button>
    </>
  );
}
