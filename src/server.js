require('dotenv').config();
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const bodyParser = require('body-parser');
const fakeSetOfData = require('./data/fakeData');
var path = require('path');

// Model Dependencies
var mongoose = require('mongoose');
var Items = require('./models/items');

const app = express();

const compiler = webpack(webpackConfig);

mongoose.connect(process.env.MONGO_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is Connected');
});

// Middleware
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
// Add item data to DB
app.post('/api/additem', function (req, res) {
  console.log(req.body);
  var item = new Items({
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
    itemDescription: req.body.itemDescription,
    itemLocation: req.body.itemLocation,
    timeAdded: req.body.timeAdded
  });
  item.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Item Added Success');
    }
  });
  res.sendStatus(200);
});

// Search Grab data
app.get('/api/search', function (req, res) {
  console.log('hit');
  res.status(200).json(
    {item:"test"}
  );
});

// Manage Routes *TEMP FIX*
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

const server = app.listen(process.env.PORT || 3040, function() {
  const host = server.address().address;
  const port = server.address().port;
  //console.log(fakeSetOfData);
  console.log('Example app listening at http://%s:%s', host, port);
});
