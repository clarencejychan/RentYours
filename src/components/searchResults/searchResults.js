import React, { Component } from 'react';
import { connect } from 'react-redux';

// Container Component
class SearchResults extends Component {
  render() {
    return (
      <div>
        Hello { this.props.location.search}
      </div>
    );
  }
}

export default SearchResults;