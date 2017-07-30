const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

var path = require('path');

app.use(express.static(__dirname + '/../build'));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// Manage Routes *TEMP FIX*
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

const server = app.listen(3040, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
