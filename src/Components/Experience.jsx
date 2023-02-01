import React from 'react'
import { Card,Row,Col,Container } from 'react-bootstrap'
import "./css/experience.css";
import "./css/Cp.css";
import plone from "../assets/img/plone.svg";


export default function Experience() {
  return (
    <>
    <div className="cp">
              <div className="text">
                <h1>Experience</h1>
                </div>


 
       <Container>
      
                <Row className='row2' xs={1} md={2}>

                <Col className='codechef intern mx-2'   >
                <Card className='codechef' style={{ width: '100%' }}>
                    {/* <Card.Img  variant="top" src="https://cdn.codechef.com/images/cc-logo.svg" /> */}
                    <Card.Body style={{width:'100%' }}>
                        <Card.Title className='text'  ><h3>Web Developer Internship</h3></Card.Title>
                        <Card.Text className='text'>
                          
                          <h3 className='name'>Sarva Suvidhaen Private Limited</h3>
                          <p className='my-3'>Jan 2023- present</p>
                         <p>
                         &#9755; Working as Django developer on various projects, including developing on AWS and maintaining web applications,
                                 implementing new features, and debugging and <br /> troubleshooting issues.</p>
                           <p className='mx-3'>&#9755; Also collaborating with a team of developers and learned best practices for writing clean, efficient, maintainable cod
                           </p>
                    
                         
                        </Card.Text>


                         
                    </Card.Body>
                </Card>
                </Col>
                <Col className='codechef intern1' >
                <Card className='codechef' style={{ width: '100%' }}>
                    <Card.Img  variant="top" className='img' src={plone} />
                    <Card.Body>
                        <Card.Title className='text' ><h3>open source contributer</h3></Card.Title>
                        <Card.Text className='text'>
                          
                        
                        </Card.Text>

                         <a className='btn22' href="https://plone.org/"> <div className="button button-1"><p> Plone</p></div></a>
                         <h1>   </h1>
                    </Card.Body>
                </Card>
                </Col>



                </Row>

        </Container>
    </div>

    </>
  )
}
