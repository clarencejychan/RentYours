import React, { Component } from 'react';
import './style.scss';

class ItemCard extends Component {
  render() {
    return (
      <div className="item-card-container">
        <div className="item-card-item-picture" />
        <div className="item-card-item-caption" />
      </div>
    );
  }
}

export default ItemCard;
