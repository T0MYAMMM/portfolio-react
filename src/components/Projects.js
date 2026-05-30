import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { ProjectCard } from "./ProjectCard";
import { website, mobile, other } from "../data/projects";

const PROJECT_TABS = [
  { eventKey: "first", label: "Websites", data: website },
  { eventKey: "second", label: "Mobile Apps", data: mobile },
  { eventKey: "third", label: "Others", data: other },
];

export const Projects = () => (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>
                  A collection of website, mobile, and software projects spanning
                  design implementation, computer vision, and system engineering.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {PROJECT_TABS.map(({ eventKey, label }) => (
                      <Nav.Item key={eventKey}>
                        <Nav.Link eventKey={eventKey}>{label}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>

                  <Tab.Content
                    id="slideInUp"
                    className={isVisible ? "animate__animated animate__slideInUp" : ""}
                  >
                    {PROJECT_TABS.map(({ eventKey, data }) => (
                      <Tab.Pane key={eventKey} eventKey={eventKey}>
                        <Row className="justify-content-center">
                          {data.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
);
