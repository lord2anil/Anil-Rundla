import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/anil.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import url from "./img/leetcode.svg"
import './css/Navbar.css'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export default function Navbar1() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand className="img2" href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'btn11 active navbar-link' : 'btn11 navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#About" className={activeLink === 'About' ? 'btn11 active navbar-link' : 'btn11 navbar-link'} onClick={() => onUpdateActiveLink('About')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'btn11 active navbar-link' : 'btn11 navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'btn11  active navbar-link' : 'btn11 navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* <div className="social-icon">
                <a href="https://www.linkedin.com/in/anil-rundla-311a7121b"><img src={url} alt="" /></a>
                <a href="https://www.linkedin.com/in/anil-rundla-311a7121b"><img src={url} alt="" /></a>
                <a href="https://www.linkedin.com/in/anil-rundla-311a7121b"><img src={url} alt="" /></a>
              </div> */}
              <HashLink to='#connect'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}



