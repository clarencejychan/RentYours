import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import $ from 'jquery';

import Info from '../infosections/info';
import Search from '../search/search';

import './style.scss';

class Home extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {scrollPast: ""};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  //handles the scroll event for the navbar
  handleScroll() {
     if( window.innerHeight <= document.body.scrollTop) {
       this.setState({scrollPast: 'navbar-fixed-top'});
     } else {
       this.setState({scrollPast: null});
     }
  }

  render() {
    return (
      <div className="homepage">
        <div className="homepage-container">
          <div className="homepage-container-main">

            {/* Navbar */}
            <Navbar collapseOnSelect className={this.state.scrollPast} id="navbar" role="navigation">
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">RentYours</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <LinkContainer to="/test" className="nav-item">
                    <NavItem id="list-items">List Items</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/listings" className="nav-item">
                    <NavItem id="browse-items" >Browse Items</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login" className="nav-item">
                    <NavItem id="login">Log In</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/signup" className="nav-item">
                    <NavItem id="sign-up">Sign Up</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* Home Page Hero FIX: CREATE AS OWN FUNCTIONAL CLASS*/}
            <div className="homepage-inner-container">
              <div className="homepage-inner-container-contents">
                <div className="logo-container">
                  <h1 className="logo-text">RentYours</h1>
                  <div className="example-icon" />
                </div>

                {/* SEARCH BAR*/}
                <div className="search-bar">
                  <Search />
                </div>
              </div>
            </div>
          </div>


          {/* Home Page Hero FIX: CREATE AS OWN FUNCTIONAL CLASS*/}
          <Info />

        </div>
      </div>
    );
  }
};

export default Home;
