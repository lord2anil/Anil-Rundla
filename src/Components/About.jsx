import React from "react";

import "./css/style.css";
import "./css/media.css";

import "./css/Info.css";
import url from "../assets/img/my2.jpg"
import TrackVisibility from 'react-on-screen';
// import { isVisible } from '@testing-library/user-event/dist/utils';
export default function About() {

    

  return (
   <div className="about" id='About'>
    
            
        
    <TrackVisibility partialVisibility>
    {({ isVisible }) =>
    <section className={isVisible?"info animate__animated animate__swing":"info"} id="info">
    <div className="container">
        <h2 className="info__title">About <span className="me">Me</span></h2>
        <div className="border__blog">
            <div className="border">Who I am</div>
        </div>
        <div className="info__box">
            <div className="info__image">
                <img className="info__img" style={{borderRadius: '80%'}} src={url} alt=""/>
            </div>
            <div className="info__blog">
                <h3 className="info__typing">I'm Anil and I'm a <span className="typing__two"></span></h3>
                <p className="info__text1">Experienced web developer with a strong background in data structures and algorithms. Skilled in developing high-quality, scalable web applications using modern frameworks and technologies.</p>
                <p className="info__text2">Proficient in implementing efficient algorithms for complex data processing tasks. Looking to connect with professionals in the tech industry and explore new opportunities in web development and data engineering.</p>
                {/* <a href="https://myaccount.google.com/profile" className="info__link1">From Google</a>
                <a href="#projects" className="info__link2">Projects</a> */}
            </div>
        </div>
    </div>
  </section>}
 </TrackVisibility>
  

  </div>
  )
}
