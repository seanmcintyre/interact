import React from 'react';
import { css } from '@emotion/css';

import { Nutrition } from './Nutrition';

export default {
  title: 'Components/Information/Nutrition',
  component: Nutrition,
};

const className = css`
  display: block;
  margin: 0 0 1rem 0;
`;

export function Common() {
  return (
    <>
      <Nutrition size={1} className={className} />
    </>
  );
}
