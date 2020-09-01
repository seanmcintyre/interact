const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  stories: [
    '../readme.stories.mdx',
    '../design-system/**/*.stories.mdx',
    '../design-system/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['react-native$'] = 'react-native-web';

    return config;
  },
};
