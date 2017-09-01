import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

//import itemsReducer from './item_reducer';

// Can name reducers the same as the key for ES6
const rootReducer = combineReducers({
  items: searchReducer
  //userItems: itemsReducers
});
