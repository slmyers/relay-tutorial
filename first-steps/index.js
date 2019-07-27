const graphQLHTTP = require('express-graphql');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {schema} = require('./data/schema');

const APP_PORT = 3000;
// compile the relay app into a file 'bundle.js'
const compiler = webpack({
  mode: 'development',
  // index.html request will resolve to project root
  context: __dirname,
  // load App.js
  entry: path.resolve(__dirname, 'ReactApp', 'App.js'),
  // apply the babel loader to all js files (App.js)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // transform react, relay 
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
  },
});
// provide color text in console
const app = new WebpackDevServer(compiler, {
  stats: {
    colors: true,
  },
});
// setup the endpoint that relay will use
// we use the schema defined in data/schema/index.js
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
