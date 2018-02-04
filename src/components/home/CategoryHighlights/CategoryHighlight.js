import React, { Component } from 'react';
import ItemCard from './itemCards/ItemCard';
import './style.scss';

// Container Component for itemCards (Projects) on Home Page.
class CategoryHighlight extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="category-highlight container">
        <h2 className="category-highlight-titles">{ this.props.category }</h2>
          <div className="category-highlight-item-cards-container">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
      </div>
    );
  }

};

export default CategoryHighlight;
