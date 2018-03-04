'use strict';

module.exports = {
  entry: './app.js',
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    lazy: true
  }
};