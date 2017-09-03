import React, { Component } from 'react';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import SearchButton from 'react-icons/lib/go/search';
import { bindActionCreators } from 'redux';
import getSearchItems from '../../actions/searchItems';
import {connect} from 'react-redux';
import './style.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(itemName) {
    this.props.getSearchItems(itemName);
  }

  // Fill in proper values
  render() {
    return (
      <Row>
        <Col xs={20} md={12}>
          <InputGroup bsSize="large">
            <FormControl className="search-form" placeholder="Enter text"/>
              <InputGroup.Button bsSize="large">
                <Button bsSize="large" className="search-button" onClick={() => this.handleSearch("test")}>
                  <SearchButton size={'18px'}/>
                </Button>
              </InputGroup.Button>
          </InputGroup>
        </Col>
	    </Row>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSearchItems: getSearchItems
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
