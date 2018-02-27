import {REQUESTING_ITEMS_INFO,
        REQUEST_ITEMS_INFO_SUCCESS,
        REQUEST_ITEMS_INFO_FAILURE,
        REMOVE_OLD_ITEMS} from './types';
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

// Clear Old search in state
function requestRemoveOldItems() {
  return {
    type: REMOVE_OLD_ITEMS
  };
}

function getSearchItems(itemName) {
  return dispatch => {
    // Show that it is requesting, will be updated after.
    dispatch(requestRemoveOldItems());
    dispatch(requestItems(itemName));
    return axios.get(`/api/search?project-name=${itemName}`)
    .then(response => {
      let json = response.data;
      dispatch(requestItemsSuccess(json));
    }).catch(error => {
      dispatch(requestItemsFailure(itemName));
    });
  };
}

// should search for top 4 in a category
function getCategoryHighlights() {
  return dispatch => {
    // Show that it is requesting, will be updated after.
    dispatch(requestRemoveOldItems());
    dispatch(requestItems(itemName));
    return axios.get(`/api/search?limit=4`)
    .then(response => {
      let json = response.data;
      dispatch(requestItemsSuccess(json));
    }).catch(error => {
      dispatch(requestItemsFailure(itemName));
    });
  };
}

export {
  getSearchItems,
  getCategoryHighlights
}
