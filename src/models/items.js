import mongoose from 'mongoose';

var itemsSchema = new mongoose.Schema({
  itemName: String,
  itemHelpers: [String],
  itemCategory: String,
  itemDescription: String,
  itemTags: [String],
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
