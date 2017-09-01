import React, { Component } from 'react';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';\
import SearchButton from 'react-icons/lib/go/search';
import getSearchItems from '../../actions/searchItems';
import {connect} from 'react-redux';
import './style.scss';

class Search extends Component {
  render() {
    return (
      <Row>
        <Col xs={20} md={12}>
          <InputGroup bsSize="large">
            <FormControl className="search-form" placeholder="Enter text"/>
              <InputGroup.Button bsSize="large">
                <Button bsSize="large" className="search-button">
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
