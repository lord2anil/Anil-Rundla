import React from 'react'
import "./css/Cp.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import leetcode from "./img/leetcode.svg"


export default function Cp() {
  return (
    <>
    <div className="cp">
              <div className="text">
                <h1>Progarmming</h1>
                </div>


 
       <Container>
      
                <Row className='row2'>
                <Col sm={3}> <img src="https://icongr.am/devicon/cplusplus-plain.svg?size=200&color=ffffff" alt="" /></Col>
                <Col className='codechef' sm={3}>
                <Card className='codechef' style={{ width: '20rem' }}>
                    <Card.Img  variant="top" src="https://cdn.codechef.com/images/cc-logo.svg" />
                    <Card.Body>
                        <Card.Title className='text' ><h3>3 &#11088;</h3></Card.Title>
                        <Card.Text className='text'>
                          
                          <h3>Max Rating (1644)</h3>
                        </Card.Text>

                         <a className='btn22' href="https://www.codechef.com/users/lord123123"> <div className="button button-1"><p> Profile</p></div></a>
                    </Card.Body>
                </Card>
                
                
                
                </Col>
                <Col   sm={3}>
                <Card className='codechef' style={{ width: '20rem' }}>
                    <Card.Img  style={{ height: '5rem' }} variant="top" src={leetcode} />
                    <Card.Body>
                        <Card.Title className='text' ><h3>Leetcode</h3></Card.Title>
                        <Card.Text className='text'>
                          
                          <h3>Solve more Then 200 DSA Que.</h3>
                        </Card.Text>

                         <a className='btn22' href="https://www.codechef.com/users/lord123123"> <div className="button button-1"><p> Profile</p></div></a>
                    </Card.Body>
                </Card>


                </Col>
                <Col  sm={2}>
                <Card  className='codechef'   >
                   <div className="achiv">
                   <h1>Achievements</h1>
                   <h6>3 start on Code chef (MAX- 1644)</h6>
                   <h6> Secured global rank of 1272 in Google Kick-start round -H</h6>
                   <h6>Secured a global rank of 83 in Code chefStarters 60</h6>
                   <h6>Solved more than 600+ Problems on various platforms like codechef,Leetcode, GeeksforGeeks, codestudio</h6>
                   </div>
                </Card>
                </Col>
                </Row>
        </Container>
    </div>
    </>

  )
}
