import React, { Component } from 'react';
import './style.scss';

class Item extends Component {
  render() {
    return (
      <div id={this.props.itemInfo._id} className='items-container'>
        <img src={this.props.itemInfo.itemImageUrl} className='items-image' />
        <div className='item-text-container'>
          <span className='item-name'>
            {this.props.itemInfo.itemName}
          </span>
          <span className='item-description'>
            {this.props.itemInfo.itemDescription}
          </span>
        </div>
      </div>
    );
  }
}

export default Item;
