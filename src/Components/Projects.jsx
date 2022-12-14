import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chat from "../assets/img/chat.png"
import news from "../assets/img/news.jpg"
import path from "../assets/img/path.png"
import cart from "../assets/img/cart.jpg"
import notes from "../assets/img/notes.png"


import TrackVisibility from 'react-on-screen';


 export    default function Projects() {

  const projects = [
    {
      title: "Chat Flow",
      description: `
       » Tools & technologies used: Socket.io, Node Js, React Js, HTML , CSS , JS, MongoDB
      » Developed a full-stack web chat application using React and Node.js. Implemented real-time messaging functionality
      using Socket.io and a MongoDB database to store and retrieve user messages. Utilized JWT authentication to secure
      user login and permissions`,
      imgUrl:chat,
      url:"https://github.com/lord2anil/Chat-app-using-Socket-node.js-React.git"
    },
    {
      title: "NewsHub",
      description: `Tools & technologies used: React.js, HTML, CSS, Java Script , Bootstrap5, News API
      » Developed a full-stack web news application using React and JavaScript. Utilized the News API to retrieve and display
      real-time news articles to users. Incorporated Bootstrap and Bootstrap5 for responsive design and layout`,
      imgUrl:news,
      url:"https://github.com/lord2anil/newsapp1.git"
    },
    {
      title:  "MemoBoard",
      description: `Developed a full-stack web application for saving user notes using React and Node.js. Utilized a MongoDB database
      to store and retrieve user notes. Incorporated Bootstrap5 for responsive design and layout. Implemented JWT
      authentication to secure user login and permissions`,
      imgUrl:notes,
      url:"https://github.com/lord2anil/mybook.git"
    },
    {
      title: "E-commerce website",
      description: `Implements the functioning of an E-commerce Website that contains various pages like Home, products, cart,product
      details, add to cart, billing, and much more, developed by Using HTML, CSS, JAVA Script React.
      `,
      imgUrl:cart,
      url:"https://github.com/lord2anil/Ecommerce.github.io.git"
    },
    {
      title: "Path Finder",
      description: `PathFinding Visualizer’ is a web based e-Learning tool that visualizes shortest path algorithms. The concept
      behind the tool is illustrated by implementing algorithms such as Dijkstra’s algo, A* and DFS,`,
      imgUrl:path,
      url:"https://pathfinder2002.netlify.app/"
    },
    
    
   
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> "Independence can be tough. Without a studio to back you up, when you finish a feature and want to start a new project you have to start from zero.” ~ Raul Garcia</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (

                               <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={url}></img> */}
    </section>
  )
}
