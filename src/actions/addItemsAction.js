import {ADD_ITEMS, 
        ADD_ITEMS_SUCCESS, 
        ADD_ITEMS_FAILURE } from './types';
import axios from 'axios';

// ADD ITEMS ACTION
function addItems(itemInfo) {
  return {
    type: ADD_ITEMS,
    itemName: itemInfo.itemName,
    itemPrice: itemInfo.itemPrice,
    itemDescription: itemInfo.itemDescription,
    itemLocation: itemInfo.itemLocation,
    itemImageUrl: itemInfo.itemImageUrl,
    timeAdded: itemInfo.timeAdded
  };
}

// ADD ITEMS SUCCESS
function addItemsSuccess() {
  return {
    type: ADD_ITEMS_SUCCESS
  };
}

// ADD ITEMS FAILURE
function addItemsFailure() {
  return {
    type: ADD_ITEMS_FAILURE
  };
}


export default function submitItems(itemInfo) {
  return dispatch => {
    // Dispatch the Add Items Action
    dispatch(addItems(itemInfo));

    return axios.post('/api/additem', itemInfo)
    .then(response => {
      console.log(response.data);
      dispatch(addItemsSuccess());
    }).catch(error => {
      console.log(error);
      dispatch(addItemsFailure());
    });
  };
}
