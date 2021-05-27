import { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<div>
        <Navbar className="header2" expand="lg" variant="dark">
            <Navbar.Brand className = "header__left" >
            <Link className = "header2__left__title" to="/"> 
                    Shahana Kabir
                    </Link>
                </Navbar.Brand>

            <Nav className = "header__right">
                <Nav.Link >
                <Link className="header2__right__items" to="/Resume"> 
                    Resume
                    </Link>                   
                </Nav.Link>
          
                <Nav.Link >
                    <Link className="header2__right__items" to="/Projects"> 
                    Projects
                    </Link>
                </Nav.Link>

                <Nav.Link >
                <Link className="header2__right__items" to="/Contact">
                        Contact
                    </Link>
          </Nav.Link>
            </Nav>
        </Navbar>
    </div>);
}

export default Header;