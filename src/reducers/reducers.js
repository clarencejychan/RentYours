import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import

// Can name reducers the same as the key for ES6
const rootReducer = combineReducers({
  items: searchReducer,
  userItems: itemsReducers
});
