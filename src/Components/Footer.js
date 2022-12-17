import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/anil.svg';
// import { SocialIcon } from 'react-social-icons';

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";




export default function Footer()  {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={3} sm={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={3} sm={3}>
            <div className="address">
             <p> Contact : +91 8000822246</p>
             <p> Email : a8208226@gmail.com</p>

            </div>
          </Col>
          <Col size={3} sm={3}>
            <div className="address">
            <p> Email: anil_2001me08@iitp.ac.in</p>
            <p><span  style={{fontSize:"30px"}}> &#127969;</span>Jaipur(Rajasthan)</p>

            </div>
          </Col>
          <Col size={3} sm={3} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anil-rundla-311a7121b"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/lord2anil"><img src={navIcon2} alt="Icon" /></a>
              {/* <SocialIcon url="https://github.com/lord2anil"  bgColor="blue"/> */}
              
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
