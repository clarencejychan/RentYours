import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import $ from 'jquery';

import Search from '../search/search';
import './style.scss';


class Home extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.render = this.render.bind(this);
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

  render(event) {
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
                </div>
                <div className="footer-text">
                  blurb hurr durr
                  <div className="example-icon" />
                </div>
                {/* SEARCH BAR*/}
                <div className="search-bar">
                  <Search />
                </div>
              </div>
            </div>


            <div className="image-container">
              <img id="img-1" src="http://cdn.wonderfulengineering.com/wp-content/uploads/2014/10/simple-wallpaper-13.jpg"></img>
            </div>
            <div className="image-container">
              <img id="img-2" src="http://wallpapercave.com/wp/4SSFz3R.png"></img>
            </div>
            <div className="image-container">
              <img id="img-3" src="https://hdwallsource.com/img/2014/9/simple-backgrounds-17277-17833-hd-wallpapers.jpg"></img>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default Home;
