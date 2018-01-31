import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import $ from 'jquery';

import CategoryHighlight from './CategoryHighlights/CategoryHighlight';
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
                  <a href="#" className="nav-logo">Sidehelp!</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <LinkContainer to="/listproject" className="nav-item">
                    <NavItem id="list-items">Add Project</NavItem>
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
                  <h1 className="logo-text">Sidehelp!</h1>
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
          <CategoryHighlight category="Mobile Development" />
          <CategoryHighlight category="Web Development" />
          <CategoryHighlight category="UX Design" />

        </div>
      </div>
    );
  }
};


export default Home;
