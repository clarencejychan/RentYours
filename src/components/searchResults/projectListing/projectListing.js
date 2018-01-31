import React, { Component } from 'react';
import './style.scss';

class Listing extends Component {
  render() {
    return (
      <div id={this.props.itemInfo._id} className='listing-container'>
        <img src={this.props.itemInfo.itemImageUrl} className='listing-image' />
        <div className='listing-text-container'>
          <span className='listing-name'>
            {this.props.itemInfo.itemName}
          </span>
          <span className='listing-description'>
            {this.props.itemInfo.itemDescription}
          </span>
        </div>
      </div>
    );
  }
}

export default Listing;
