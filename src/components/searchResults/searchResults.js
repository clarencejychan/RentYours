import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Listing from './projectListing/projectListing';
import getSearchItems from '../../actions/searchItemsAction';

// Container Component
class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Here I know that someone may be trying to send link to somebody else.
    if (this.props.items && !this.props.items.length && this.props.location.search) {
      let searchText = queryString.parse(this.props.location.search);
      if ('item-name' in searchText) {
        // Have to use key notation cause of hyphen, dispatch items
        this.props.getSearchItems(searchText['item-name']);
      }
    }
  }

  // Re-renders twice because gets new props, BUG HERE
  render() {
    console.log(this.props.items);
    return (
      <div className='project-listing-wrapper'>
        { this.props.items.map((item, index) => (
          //console.log(item),
          <Listing itemInfo={item} key={index} />
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSearchItems: getSearchItems
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    // Gets the list of fetched items
    items: state.items.items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
