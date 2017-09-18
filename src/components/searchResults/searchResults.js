import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './item/item';

// Container Component
class SearchResults extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div className='items-wrapper'>
        Hello { this.props.location.search }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // Gets the list of fetched items
    items: state.items.items
  };
}

export default connect(mapStateToProps, null)(SearchResults);