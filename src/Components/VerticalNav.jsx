import React ,{useState}from 'react'
import { SocialIcon } from 'react-social-icons';
import "./css/Vertical.css"

// import url from "./img/code.png"

export default function VerticalNav() {

    const [className, setclassName] = useState('')
    const [className1, setclassName1] = useState('')
    // const [code, setcode] = useState(url)
    const change=()=>{
        setclassName("animate__animated animate__wobble")
    }
    const change2=()=>{
        setclassName1("animate__animated animate__headShake")
    }
    // const change3=()=>{
    //     setcode("https://img.icons8.com/color/48/null/codechef.png")
    // }
    const change1=()=>{
        setclassName("");
        setclassName1("");
        
    }

  return (
    <>
      <div className=" container1 animate__animated animate__fadeInRight">

        <ul>

            <li><SocialIcon className={className} onMouseLeave={change1} onMouseEnter={change} url="https://github.com/lord2anil"  bgColor="blue"/></li>
            <li className={className1} onMouseLeave={change1} onMouseEnter={change2}><SocialIcon url="https://www.linkedin.com/in/anil-rundla-311a7121b" /></li>
            {/* <li onMouseLeave={change1} onMouseEnter={change3}> <a href="https://www.codechef.com/users/lord123123"> <img src={code} alt=''/></a></li> */}
            



         
        </ul>
        <div className='Resume'> <a href="https://drive.google.com/file/d/1R2uQq1qnDTeX-_Mv5Lzujb8kyNxo6zh7/view?usp=share_link"><button  className='glowing-btn'><span className='glowing-txt'>R<span className='faulty-letter'>ES</span>UME</span></button></a></div>



      </div>


    
    
    </>

  )
}
