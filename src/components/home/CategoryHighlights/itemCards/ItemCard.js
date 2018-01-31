import React, { Component } from 'react';
import './style.scss';

class ItemCard extends Component {
  render() {
    return (
      <a href = "http://www.google.ca">
      <div className="item-card-container">
        <div className="item-card-item-picture" />
        <div className="item-card-item-caption" />
      </div>
      </a>
    );
  }
}

export default ItemCard;
