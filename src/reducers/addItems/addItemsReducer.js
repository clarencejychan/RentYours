import {ADD_ITEMS,
        ADD_ITEMS_SUCCESS,
        ADD_ITEMS_FAILURE } from '../../actions/types';

export default function(state = {isAdding: false}, action) {
  switch (action.type) {
    case ADD_ITEMS:
      return Object.assign({}, state, {
        isAdding: true,
        itemName: action.itemName,
        itemHelpers: action.itemHelpers,
        itemCategory: action.itemCategory,
        itemDescription: action.itemDescription,
        itemTags: action.itemTags,
        itemImageUrl: action.itemImageUrl,
        timeAdded: action.timeAdded
      });
    case ADD_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isAdding: false,
        itemAddedStatus: true
      });
    case ADD_ITEMS_FAILURE:
      return Object.assign({}, state, {
        isAdding: false,
        itemAddedStatus: false
      });
    default:
      return state;
  }
};
