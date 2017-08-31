import { combineReducers } from 'redux';
import SearchReducer from './search_reducer';

// Can name reducers the same as the key for ES6
const rootReducer = combineReducers({
  itemsLoaded: SearchReducer,
  checkoutItems: CheckoutReducer,
  user: UserReducer
});
