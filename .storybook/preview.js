import React from 'react';
import {
  createGlobalStyle,
  StyleSheetManager,
} from 'styled-components';

import { themes } from '@interact/color';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <StyleSheet />
      <StyleSheetManager disableVendorPrefixes>
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </StyleSheetManager>
    </>
  ),
];

const StyleSheet = createGlobalStyle`
  :root {
    ${themes.light}
  }

  html {
    /* font-family: "iA Writer Duo S", serif; */
    font-family: "Inter", sans-serif;
    line-height: 1.75;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  button {
    font-family: inherit;
  }
`;
