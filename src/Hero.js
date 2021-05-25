import { Component } from 'react';
import { Nav, Navbar, Container, Col} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './hero.scss';

const Hero = () => {
    return ( 
     <div className = "hero">
         <Container className = "d-flex flex-row justify-contect-between" >
        <Col className = "justify-content-center"> 
        Lorem IColsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </Col>

      <Col>
        <img className = " mr-4 mt-4" src = {require('./assets/pic2.jpeg')} />
        </Col>

</Container>


        </div> );
}
 
export default Hero;