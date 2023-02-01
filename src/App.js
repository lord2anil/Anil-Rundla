import React from 'react'
import Navbar1 from './Components/Navbar1'
import "./Components/css/style.css"
import "./Components/css/media.css"
import "./Components/css/fonts.css"
import About from './Components/About'
import 'bootstrap/dist/css/bootstrap.min.css';

import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import VerticalNav from './Components/VerticalNav'
import Skill from './Components/Skill'
import './App.css';

import Cp from './Components/Cp'
import Banner  from './Components/Banner'
import Experience from './Components/Experience'
export default function App() {
  return (
    <>
    <div className='App'>
    <Navbar1/>
    <Banner/>
    </div>
     <About/>
     <Experience/>
     <Skill/>
     <Cp/>
    
     <div className='App'>
     <Projects/> 
     <Contact/></div>
     <Footer/>
     <VerticalNav/>
    </>
  )
}
