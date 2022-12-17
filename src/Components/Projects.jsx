import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import url from "./img/bootstrap.svg"


import TrackVisibility from 'react-on-screen';


 export    default function Projects() {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl:url,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: url,
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
