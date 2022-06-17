import './navbar.css'
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends React.Component {
    render () {{
  
    return (
    <Navbar className="navbar navbar-light">
      <NavbarBrand className='ml-3'>Brooks Rosenberg</NavbarBrand>
      <Nav className='ml-auto'>
        <NavItem>
          <NavLink href="/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/work">Works</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </Nav>   
    </Navbar>
  );
}}}

export default Navigation;
