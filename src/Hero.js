import { Component } from 'react';
import { Nav, Navbar, Container, Col} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './hero.scss';
import pic2 from './assets/pic2.jpeg';

const Hero = () => {
    return ( 
     <div className = " hero d-flex flex-row justify-content-between">
        
        <div className = "hero__para d-flex flex-column justify-content-center"> 
        Lorem IColsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        
        <div className = "d-flex flex-column justify-content-center" >
        <img  src = {pic2} width = "100rem" height = "100rem" />
       </div>
        </div> );
}
 
export default Hero;