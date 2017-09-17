var mongoose = require('mongoose');

var itemsSchema = new mongoose.Schema({
  itemName: String,
  itemPrice: String,
  itemDescription: String,
  itemLocation: String,
  itemImageUrl: String,
  timeAdded: Number
});

itemsSchema.index({ 
  itemName: 'text', 
  itemDescription: 'text' },
  { name: 'itemIndex', 
    weights: 
    { itemName: 10, 
      itemDescription: 5 
    }
  }
);

module.exports = mongoose.model('Items', itemsSchema);  