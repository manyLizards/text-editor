const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a manifest file.
const webpack = require('webpack'); //to access built-in plugins

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
      new ServiceWorkerWebpackPlugin({
        entry: path.join(__dirname, 'src/sw.js'), 
        //lines 24-25 fulfill requirement to configure workbox plugins for a service worker
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
