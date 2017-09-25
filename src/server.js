require('dotenv').config();
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const bodyParser = require('body-parser');
const fakeSetOfData = require('./data/fakeData');
var path = require('path');

// Amazon Service
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;
aws.config.region = 'us-east-2';

// Model Dependencies
var mongoose = require('mongoose');
var Items = require('./models/items');
//var User = require('./models/user');

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
    itemImageUrl: req.body.itemImageUrl,
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

// Get Signing URL
app.get('/api/sign-s3', function(req, res) {
  console.log('hit');
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, function(error, data) {
    if (error) {
      console.log(error);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.status(200).json(returnData);
  });
});

// Search Grab data
app.get('/api/search', function (req, res) {
  console.log('hit');
  console.log(req.query['item-name']);
  var searchString = req.query['item-name'];
  Items.find({$text: {$search: searchString}})
  .exec(function(err, docs) { 
    res.status(200).json(
      {
        item: docs
      }
    );
  });
});

// Manage Routes *TEMP FIX*
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

const server = app.listen(process.env.PORT || 3040, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
