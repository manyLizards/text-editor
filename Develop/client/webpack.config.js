const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.

// TODO: Add CSS loaders and babel to webpack.


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
      new WebpackPwaManifest(),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js'
      })
    ],

    module: { //I think I need office hours for this one
      rules: [
        test: ,
        use: ,
      ],
    },
  };
};
