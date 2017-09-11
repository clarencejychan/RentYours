import { combineReducers } from 'redux';
import searchReducer from './search/searchReducer';
import addItemsReducer from './addItems/addItemsReducer';
//import itemsReducer from './item_reducer';

// Can name reducers the same as the key for ES6
const rootReducer = combineReducers({
  items: searchReducer,
  addItemsInfo: addItemsReducer
});

export default rootReducer;
