const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack({
    entry: './app.js',
    mode: "development",
    output: {
        filename: "bundle.js",
    },
  });
const express = require('express');
const app = express();

app.use(middleware(compiler, {
    lazy: true
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))