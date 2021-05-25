import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
   
    <Header />
    <Hero />
    <Projects />
    <Contact />
    <Footer />

    </BrowserRouter>
  );
}

export default App;
