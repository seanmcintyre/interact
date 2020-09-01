// @generated: @expo/next-adapter@2.1.20
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');
const widthTranspileModules = require('next-transpile-modules')([
  '@interact/components',
]);

module.exports = widthTranspileModules(
  withExpo({
    projectRoot: __dirname,
  }),
);
