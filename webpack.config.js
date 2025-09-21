const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    publicPath: '/',
    assetModuleFilename: 'images/[name].[hash][ext]',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new Dotenv({
      path: './.env',
      safe: false,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
    // Copy favicon and other static assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images/favicon.ico',
          to: 'images/favicon.ico'
        },
        {
          from: 'src/images/apple-touch-icon.png',
          to: 'images/apple-touch-icon.png'
        },
        {
          from: 'src/.well-known',
          to: '.well-known'
        }
      ]
    })
  ],
  // No devServer - completely removed WebSocket functionality
};
