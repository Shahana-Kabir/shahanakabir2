import { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<div>
        <Navbar className="header2" expand="lg" variant="light">
            <Navbar.Brand  >
            <Link to="/"> 
                    Shahana Kabir
                    </Link>
                </Navbar.Brand>

            <Nav className="header2__items">
                <Nav.Link >
                <Link to="/Resume"> 
                    Resume
                    </Link>                   
                </Nav.Link>
          
                <Nav.Link>
                    <Link to="/Projects"> 
                    Projects
                    </Link>
                </Nav.Link>

                <Nav.Link >
                <Link to="/Contact">
                        Contact
                    </Link>
          </Nav.Link>
            </Nav>
        </Navbar>
    </div>);
}

export default Header;