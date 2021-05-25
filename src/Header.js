import { Component } from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap' ;
import './header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( <div> 
  <Navbar className = "header2" expand="lg" variant = "light">
    <Navbar.Brand  href="#" >Shahana Kabir</Navbar.Brand>
  </Navbar>      
    </div> );
}
 
export default Header;