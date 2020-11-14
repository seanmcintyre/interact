import React from 'react';
import { css } from '@emotion/css';

// import { style } from './Nutrition.style';
import { Props } from './Nutrition.types';

import { Node, useCSS } from '../../../core';

export function Nutrition({ children, ...props }: Props) {
  const CSS = useCSS(style, {
    // format, status, size, variant
  });

  return (
    <Node
      // accessibilityRole="button"
      element="div"
      css={CSS}
      {...props}
    >
      <h1 className={cssHeader}>Nutrition Facts</h1>
      <span className={cssSpan}>serving size 1 cup (200g)</span>
      <span className={cssSpan}>servings per container 2</span>
      <Divider />
      <h1 className={cssHeader}>
        <span>Calories</span>
        <span style={{ float: 'right' }}>250</span>
      </h1>
      <Divider />
      <h4
        className={css`
          text-align: right;
          display: block;
          width: 100%;
          margin: 0;
        `}
      >
        daily value
      </h4>
      <Nutrient kind="Total Fat" value={12} unit="grams">
        <Nutrient.Detail
          kind="Saturated Fat"
          value={3}
          unit="grams"
        />
      </Nutrient>
      {/* <Servings></Servings>
      <MacroNutrients></MacroNutrients>
      <MicroNutrients></MicroNutrients>
      <Footnote></Footnote> */}
    </Node>
  );
}

const style = () => css`
  display: inline-flex;
  border: 2px solid black;
  border-radius: 0.125rem;
  padding: 1rem;

  flex-wrap: wrap;
  width: 30rem;

  letter-spacing: 0.0125rem;
  -webkit-text-stroke-width: 0.05rem;
  -webkit-text-stroke-color: black;
`;

function Divider() {
  return <div className={cssDivider} />;
}

const cssDivider = css`
  margin: 1rem 0;
  border-radius: 0.25rem;
  width: 100%;
  height: 0.5rem;
  background: black;
`;

function Nutrient({ kind, value, unit, children }: any) {
  return (
    <div
      className={css`
        padding: 0;
        font-weight: 500;
        border-top: 1px solid rgba(0, 0, 0, 0.25);
        width: 100%;
        display: block;
      `}
    >
      {kind} {value} {unit}
      {children}
    </div>
  );
}

Nutrient.Detail = ({ kind, value, unit }: any) => {
  return (
    <div
      className={css`
        padding: 0 1rem;
        opacity: 0.667;
        border-top: 1px solid rgba(0, 0, 0, 0.25);
        width: 100%;
        display: block;
        font-weight: 300;
      `}
    >
      {kind} {value} {unit}
    </div>
  );
};

const cssHeader = css`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-weight: 1000;
`;

const cssSpan = css`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: 300;
  letter-spacing: -0.0075rem;
`;
