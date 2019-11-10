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

  // Extend Storybook's default configuration
  config.module.rules.push(
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
