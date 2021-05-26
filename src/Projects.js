import { Component } from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './projects.scss';

const Projects = () => {
    return ( <Container className = "projects"> 
           <h1>
               My projects
           </h1>
           <h2>
               Happy Kids
           </h2>
           <p>
               An interactive app to look for nannies. You can login as a parent, post an Ad with your criteria for a nanny.
               On the other side, a nanny can LogIn and look for jobs there and apply for them. 
           </p>
           <h2>
               Classified-Listing (Kijiji Clone)
           </h2>
           <p>
           An interactive E-commerce site like Kijiji
           </p>

           <h2>
              InStock (colaaborative project of 5 developers)
           </h2>
        
        </Container>);
}
 
export default Projects;