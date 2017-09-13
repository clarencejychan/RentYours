import React, { Component } from 'react';
import './style.scss';

class CategoryHighlight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category-highlight container">
        <h2 className="category-highlight-titles">{ this.props.category }</h2>
      </div>
    );
  }

};

export default CategoryHighlight;