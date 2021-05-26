import { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume2 from './assets/resume.pdf';

const Resume = () => {
    return ( <div>
          <a href = {resume2} >here</a>
             
        </div> );
}
 
export default Resume;