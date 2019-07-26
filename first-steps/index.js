const express = require('express');
const graphQLHTTP = require('express-graphql');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {schema} = require('./data/schema');

const APP_PORT = 3000;

// Serve the Relay app
const compiler = webpack({
  mode: 'development',
  entry: path.resolve(__dirname, 'js', 'app.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: '/',
  },
});

const app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/js/',
  stats: {colors: true},
});

// Serve static resources
app.use('/', express.static(path.resolve(__dirname, 'public')));

// Setup GraphQL endpoint
app.use(
  '/graphql',
  graphQLHTTP({
    schema: schema,
    pretty: true,
  }),
);

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
