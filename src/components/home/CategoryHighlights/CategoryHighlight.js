import React, { Component } from 'react';
import ItemCard from './itemCards/ItemCard';
import { bindActionCreators } from 'redux';
import getCategoryHighlight from '../../../actions/searchItemsAction'
import './style.scss';

// Container Component for itemCards (Projects) on Home Page.
class CategoryHighlight extends Component {
  constructor(props) {
    super(props);
  }

  // On componentdidmount, should
  componentDidMount() {
    this.props.getCategoryHighlights();
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCategoryHighlights: getCategoryHighlights
  }, dispatch);
}


export default CategoryHighlight;
