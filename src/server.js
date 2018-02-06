
import dotenv from 'dotenv'
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import bodyParser from 'body-parser';
import path from 'path';

// Model Dependencies
import mongoose from 'mongoose';
import Items from './models/items'

// Amazon Service
import aws from 'aws-sdk';

dotenv.config();

const S3_BUCKET = process.env.S3_BUCKET;
aws.config.region = 'us-east-2';

const app = express();
const compiler = webpack(webpackConfig);

mongoose.connect(process.env.MONGO_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
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
app.post('/api/additem', (req, res) => {
  console.log(req.body);
  let item = new Items({
    itemName: req.body.itemName,
    itemHelpers: req.body.itemHelpers,
    itemCategory: req.body.itemCategory,
    itemDescription: req.body.itemDescription,
    itemTags: req.body.itemTags,
    itemImageUrl: req.body.itemImageUrl,
    timeAdded: req.body.timeAdded
  });
  item.save((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      console.log('Item Added Success');
      res.sendStatus(200);
    }
  });

});

// Get Signing URL
app.get('/api/sign-s3', (req, res) => {
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

  s3.getSignedUrl('putObject', s3Params, (error, data) => {
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
app.get('/api/search', (req, res) => {
  console.log('hit');
  console.log(req.query['project-name']);
  let searchString = req.query['project-name'];
  Items.find({$text: {$search: searchString}})
  .exec((err, docs) => {
    res.status(200).json(
      {
        item: docs
      }
    );
  });
});

/**
app.get('/api/browse', (req, res) => {
  let browseParams = req.query['']

});
**/


// Manage Routes *TEMP FIX*
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../build/index.html'));
});

const server = app.listen(process.env.PORT || 3040, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
