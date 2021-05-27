import { Component } from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap' ;
import {Link} from 'react-router-dom';
import './projects.scss';
import promo from './assets/happy.png';
import promo2 from './assets/promo2.png';
import listing1 from './assets/listing1.png';
import listing2 from './assets/listing2.png';
import instock1 from './assets/instock1.png';



const Projects = () => {
    return ( <Container fluid className = "projects"> 
           
           <h1 className = "projects__title d-flex justify-content-center mt-2">
               My projects
           </h1>
           <div className = "projects__item1">
           <h2 className = "projects__item1__happy">
               Happy Kids
           </h2>
           <p>
               An interactive app to look for nannies. You can login as a parent, post an Ad with your criteria for a nanny.
               On the other side, a nanny can Login and look for jobs there and apply for them. 
           </p>
           <div className = "d-flex justify-content-center">
           <button >
               <a href = "https://github.com/Shahana-Kabir/Happykids"> View code </a>              
           </button>
           </div>

           <div className = "d-flex justify-content-between mt-2 ">
           <img  className = "projects__image" src = {promo}  />
           <img  className = "projects__image" src = {promo2}  />
           
           </div>
           <h5 className = "mt-4 d-flex justify-content-center mb-2">
             Technologies used: HTML5, CSS, React, Javascript, Node, Express.
           </h5>
           </div>

           <div className = "projects__item1 mt-4">
           <h2 className = "projects__item1__classified">
               Classified-Listing
           </h2>
           <p>
               An e-commerce app to post an Ad with Id , check the details and so on options.
           </p>
           <div className = "d-flex justify-content-center">
           <button >
               <a href = "https://github.com/Shahana-Kabir/classified-listing"> View code </a>              
           </button>
           </div>

           <div className = "d-flex justify-content-between mt-2 ">
           <img  className = "projects__image" src = {listing1}  />
           <img  className = "projects__image" src = {listing2}  />
           
           </div>
           <h5 className = "mt-4 d-flex justify-content-center mb-2">
             Technologies used: HTML5, CSS, React, Javascript, Node, Express.   
           </h5>
           </div>

           <div className = "projects__item1 mt-4">
           <h2 className = "projects__item1__instock">
               InStock
           </h2>
           <p>
               It was a collaborative project with 5 developers using GitHub as for version control. This app allowes to see the
               details of an inventory, update and edit the list of warehouses and also items in the warehouses too.
           </p>
           <div className = "d-flex justify-content-center">
           <button >
               <a href = "https://github.com/Shahana-Kabir/instock"> View code </a>              
           </button>
           </div>

           <div className = "d-flex justify-content-between mt-2 ">
           <img  className = "projects__image" src = {instock1}  />
           <img  className = "projects__image" src = {listing2}  />
           
           </div>
           <h5 className = "mt-4 d-flex justify-content-center mb-2">
             Technologies used: HTML5, CSS, React, Javascript, Node,Express, GitHub.  
           </h5>
           </div>

           
        
        </Container>);
}
 
export default Projects;