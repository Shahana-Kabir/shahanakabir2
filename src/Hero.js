import { Component } from 'react';
import { Nav, Navbar, Container, Col} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './hero.scss';
import pic2 from './assets/pic2.jpeg';

const Hero = () => {
    return ( 
     <div className = " hero d-flex flex-row justify-content-between">
        
        <div className = "hero__para ml-2 d-flex flex-column justify-content-center"> 
        <h2>
            Shahana Kabir<br />
            Web Developer, Vancouver
            
        </h2>
        <p className = "mt-4">
        I'm a web developer from Vancouver, BC dedicated to building creative websites and continuing to learn new skills in web development. Currently looking for new employment opportunities.

        </p>
        </div>
        
        <div className = "d-flex flex-column justify-content-center" >
        <img  className = "hero__image mr-2" src = {pic2}  />
       </div>
        </div> );
}
 
export default Hero;