const graphQLHTTP = require('express-graphql');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {schema} = require('./graphql_backend/javascript_schema/index');
const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin')

/*
  NOTE: if you change the graphql in the backend you will have to run
  yarn build. nodemon restarts this file on folder change.
*/

const APP_PORT = 3000;
// compile the react app into a file 'bundle.js'
const compiler = webpack({
  mode: 'development',
  plugins: [
    // when we change our relay graphql this plugin will regenerate the output
    // without this plugin you would have to manually use the relay compiler
    // to see changes in the app
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, 'schema.graphql'),
      src: path.resolve(__dirname, 'react_app'),    
    })
  ],
  // index.html request will resolve to project root
  context: __dirname,
  // load App.js
  entry: path.resolve(__dirname, 'react_app', 'App.js'),
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
const app = new WebpackDevServer(compiler, {
  stats: {
    colors: true,
  },
});
// we use the schema defined in data/schema/index.js
// in production expect auth middleware ahead of this
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
