import React, { Component } from 'react';
import './style.scss';

class ItemCard extends Component {
  render() {
    return (
      <div className="item-card-container">
        <a href = "http://www.google.ca">
          <div className="item-card-item-picture" />
        </a>
        <div className="item-card-item-caption">
          <span> Project Name </span>
          <span> Project Author </span>
          <span> Tags </span>
        </div>
      </div>
    );
  }
}

export default ItemCard;
