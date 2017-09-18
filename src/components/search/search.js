import React, { Component } from 'react';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchButton from 'react-icons/lib/go/search';
import getSearchItems from '../../actions/searchItemsAction';
import Spinner from '../assets/spinner/spinner';

import './style.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(event) {
    if (event.charCode === 13) {
      this.handleSearch(event.target.value);
    }
  }

  handleSearch(itemName) {
    this.props.getSearchItems(itemName);
  }

  render() {
    if (this.props.itemsFetchSuccess) {
      return (
        <Redirect to={{
          pathname: '/search',
          search: `?item-name=${this.props.searchQuery}`
        }} />
      );
    }
     
    return (
      <Row>
        <Col xs={20} md={12}>
          <InputGroup bsSize="large">
            <FormControl className="search-form" placeholder="Enter text" inputRef={ref => { this.input = ref; }} onKeyPress={this.handleEnter} />
              <InputGroup.Button bsSize="large">
                <Button bsSize="large" className="search-button" onClick={() => this.handleSearch(this.input.value)}>
                { this.props.isFetching ? (
                  <Spinner />
                ) : (
                  <SearchButton size={'18px'}/>
                )}
                </Button>
              </InputGroup.Button>
          </InputGroup>
        </Col>
	    </Row>
    );
  }
};

function mapStateToProps(state) {
  return {
    isFetching: state.items.isFetching,
    searchQuery: state.items.searchQuery,
    itemsFetchSuccess: state.items.itemsFetched
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSearchItems: getSearchItems
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
