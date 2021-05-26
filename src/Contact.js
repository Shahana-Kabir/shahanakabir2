import { Component } from 'react';
import { Nav, Navbar, Container, Row, Col} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './contact.scss';
import logo1 from './assets/git.png';
import logo2 from './assets/linkedin.png';
import logo3 from './assets/gmail.png';

const Contact = () => {
    return ( <div>
        <Container className = "ml-0 mr-0 contact ">
        <Row className = " mt-8 d-flex justify-content-center contact__title">
        <h2 >contact me</h2>
        </Row>
       <Row className = "ml-4 mr-4 d-flex justify-content-between contact__logo"> 
      <a  href = "https://github.com/Shahana-Kabir"> <img src = {logo1} width = "20rem" height = "20rem"/ > </a>
      <a  href = "https://www.linkedin.com/in/shahana-kabir-14210110/"> <img src = {logo2} width = "20rem" height = "20rem"/ > </a>
      <a  href = "https://mail.google.com/mail/u/0/#inbox"> <img src = {logo3} width = "20rem" height = "20rem"/ > </a>
      </Row>
   </Container>
        </div> );
}
 
export default Contact;