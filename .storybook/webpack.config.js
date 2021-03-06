const path = require('path');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const regexCSSmodule = /\.module\.scss$/;
const regexSCSS = /\.scss$/;
const regexStorybook = /\.stories\.jsx?$/;

const webpackConfig = ({ config, mode }) => {
  // Common function to get style loaders
  const getStyleLoaders = (cssOptions, preProcessor = 'sass-loader') => {
    const loaders = [
      // Style
      {
        loader: require.resolve('style-loader')
      },

      // CSS
      {
        loader: require.resolve('css-loader'),
        options: cssOptions
      },

      // PostCSS
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009'
              },
              stage: 3
            })
          ],
          sourceMap: false
        }
      }
    ].filter(Boolean);

    // CSS Pre-processor
    if (preProcessor) {
      loaders.push({
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: false
        }
      });
    }

    return loaders;
  };

  // Enable support for importing modules using absolute paths
  config.resolve.modules.push(path.resolve(__dirname, '../src'));

  // Extend Storybook's default configuration
  config.module.rules.push(
    // Storysource addon
    {
      enforce: 'pre',
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            injectDecorator: true,
            parser: 'javascript',
            prettierConfig: {
              bracketSpacing: true,
              printWidth: 120,
              singleQuote: true,
              tabWidth: 2,
              trailingComma: 'es5'
            },
            uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
          }
        }
      ],
      test: regexStorybook
    },

    // SCSS
    {
      exclude: regexCSSmodule,
      sideEffects: true,
      test: regexSCSS,
      use: getStyleLoaders({
        importLoaders: 2,
        sourceMap: false
      })
    },

    // CSS Modules
    {
      test: regexCSSmodule,
      use: getStyleLoaders({
        getLocalIdent: getCSSModuleLocalIdent,
        importLoaders: 2,
        modules: true,
        sourceMap: false
      })
    }
  );

  return config;
};

module.exports = webpackConfig;
