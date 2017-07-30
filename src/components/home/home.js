import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
          <Navbar collapseOnSelect className={this.state.scrollPast} id="navbar" role="navigation">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">RentYours</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem id="link-top-left" eventKey={1} href="#">Log In</NavItem>
                <NavItem id="link-top-right" eventKey={2} href="#">Sign Up</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="homepage-inner-container">
            <div className="logo-container">
              <h1 className="logo-text">RentYours</h1>
            </div>
            <div className="footer-text">
              blurb hurr durr
              <div className="example-icon" />
            </div>
            <Search />
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
    );
  }
};

export default Home;
