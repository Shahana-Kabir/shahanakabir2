import { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume2 from './assets/resume.pdf';
import './resume.scss';

const Resume = () => {
    return ( <div className = "resume2 d-flex justify-content-center ml-2">
          <a  className = "d-flex flex-column justify-content-center" href = {resume2} >Shahana's resume</a>
             
        </div> );
}
 
export default Resume;