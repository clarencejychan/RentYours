import React, { Component } from 'react';
import { FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';
import SearchButton from 'react-icons/lib/go/search';
import './style.scss';

class Search extends Component {
  render() {
    return (
      <FormGroup bsSize="large">
        <InputGroup>
          <InputGroup.Button>
            <Button className="search-icon">
            <SearchButton />
            </Button>
          </InputGroup.Button>
          <FormControl type="text"/>
        </InputGroup>
      </FormGroup>
    );
  }
};

export default Search;
