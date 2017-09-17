import {REQUESTING_ITEMS_INFO,
        REQUEST_ITEMS_INFO_SUCCESS,
        REQUEST_ITEMS_INFO_FAILURE} from './types';
import axios from 'axios';

// REQUEST ITEMS ACTION
function requestItems(itemName) {
  return {
    type: REQUESTING_ITEMS_INFO,
    searchQuery: itemName
  };
}

// REQUEST ITEMS SUCCESS ACTION
function requestItemsSuccess(itemInfo) {
  return {
    type: REQUEST_ITEMS_INFO_SUCCESS,
    receivedAt: Date.now(),
    posts: itemInfo.item
  };
}

// REQUEST ITEMS FAILURE ACTION
function requestItemsFailure(itemName) {
  return {
    type: REQUEST_ITEMS_INFO_FAILURE,
    searchQuery: itemName
  };
}

export default function getSearchItems(itemName) {
  return dispatch => {
    // Show that it is requesting, will be updated after.
    dispatch(requestItems(itemName));

    return axios.get(`/api/search?item-name=${itemName}`)
    .then(response => {
      console.log(response.data);
      let json = response.data;
      dispatch(requestItemsSuccess(json));
    }).catch(error => {
      dispatch(requestItemsFailure(itemName));
    });
  };
  //console.log('hehexd');
}
