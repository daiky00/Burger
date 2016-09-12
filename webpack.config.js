var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('style/main.css');

module.exports = {
  entry: [
    './src/scss/main.scss',
    'webpack-dev-server/client?http://localhost:3000'
  ],
  output: {
    filename: 'style/main.css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css','sass'])
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};

