var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src'),
];

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')),
    },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css'),
  ]
};
