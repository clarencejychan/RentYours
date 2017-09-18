import {REQUESTING_ITEMS_INFO,
        REQUEST_ITEMS_INFO_SUCCESS,
        REQUEST_ITEMS_INFO_FAILURE} from '../../actions/types';

export default function(state = { isFetching: false, error: false, searchQuery:"", items:[] }, action) {
  switch (action.type) {
    case REQUESTING_ITEMS_INFO:
      return Object.assign({}, state, {
        isFetching: true,
        searchQuery: action.searchQuery
      });
    case REQUEST_ITEMS_INFO_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        items: action.posts,
        itemsFetched: true,
        lastUpdated: action.receivedAt
      });
    case REQUEST_ITEMS_INFO_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        searchQuery: action.itemName,
        error: true
      });
    default:
      return state;
  }
}
