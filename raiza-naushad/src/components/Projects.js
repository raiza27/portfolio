import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/images/project1.png";
import projImg2 from "../assets/images/project2.png";
import projImg3 from "../assets/images/data.mp4";
import colorSharp2 from "../assets/images/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
import { ProjectVideoCard } from "./ProjectVideoCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
          title: "Mobile App-Legal Tech",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Service Dog App",
          description: "Design & Development",
          imgUrl: projImg2,
        },
      ];
      const dataProjects = [
        {
          title: "The Weather Network - Web Traffic Analysis",
          description: "The data and dashboard images are sourced from Similarweb, where public network traffic data is available. ",
          subject:" This sample case study and insights are for a campaign to generate increased ad revenue for the specified website.",
          videoUrl: projImg3,
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
                    <p>In times of change, learners inherit the earth; while the learned find themselves beautifully equipped to deal with a world that no longer exists - Eric Hoffer</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Mobile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Web</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Data</Nav.Link>
                        </Nav.Item>
                      </Nav>
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
                        <Tab.Pane eventKey="second">
                          <p>Are You Ready For This? Coming soon!</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {
                              dataProjects.map((project, index) => {
                                return (
                                  <ProjectVideoCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt=''></img>
        </section>
      )
}