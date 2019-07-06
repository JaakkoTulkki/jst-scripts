const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./config/webpack');
console.log('in build');

// webpack(webpackConfig, (err, status) => {
//   if(err) {
//     throw err;
//   }
//   // console.log(status);
// })

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  open: true,
  stats: {
    colors: true,
  },
});

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});
