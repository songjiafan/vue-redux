const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    index: path.join(__dirname, '../example/main.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-env']
        },
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../example/index.html'),
      chunks: ['index'],
      inject: true,
    }),
  ],
  resolve: {
    alias: {
      // 'axios-service': path.resolve(__dirname, '../src'),
    }
  },
  devServer: {
    port: 3800,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    proxy: {

    }
  }
})
