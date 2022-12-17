import React from "react";

import "./css/style.css";
import "./css/media.css";

import "./css/Info.css";
import url from "./img/pngfind.com-business-man-png-1737582.png"
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
                <img className="info__img" src={url} alt=""/>
            </div>
            <div className="info__blog">
                <h3 className="info__typing">I'm Suyunbek and I'm a <span className="typing__two"></span></h3>
                <p className="info__text1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio    commodi officia unde esse iusto quam mollitia natus expedita. Modi possimus quidem cum</p>
                <p className="info__text2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum    voluptatibus obcaecati dignissimos nihil laborum accusantium, culpa iure illo, omnis   excepturi necessitatibus consequatur vitae ipsa dolor corporis quia autem architecto.</p>
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
