import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import $ from 'jquery';
import './style.css';

class Home extends Component {
  componentDidMount(){
    $('#nav-wrapper').height($("#nav").height());
    $('#nav').affix({
      offset: { top: $('#nav').offset().top}
    });
  }
  render() {
    return (
      <div id="nav-wrapper">
        <Navbar inverse staticTop collapseOnSelect id="nav" clas="navbar">
          <Navbar.Header class="navbar-header">
             <Navbar.Brand>
               <a href="#">React-Bootstrap</a>
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
               <NavItem eventKey={1} href="#">Link Right</NavItem>
               <NavItem eventKey={2} href="#">Link Right</NavItem>
             </Nav>
           </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

export default Home;
