import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import gift from "../../Assets/Projects/giftingTree.png"
import todo from "../../Assets/Projects/todo.png";
import cloudHome from "../../Assets/Projects/cloudHome.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudHome}
              isBlog={false}
              title="Cloud Home"
              description="The project I built for file and folder upload and creation is a robust and user-friendly platform designed to streamline digital content management. It allows users to upload a variety of file types and create nested folder structures to organize their data efficiently. The interface features intuitive drag-and-drop functionality, along with search and filter options for easy navigation. Enhanced security measures, including authentication, authorization, and encryption, ensure that user data remains protected."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO-LIST"
              description="The Simple ToDo List application is a user-friendly task management tool built with React.js. It allows users to add new tasks, mark tasks as done, and delete tasks. The intuitive interface and basic functionality make it an ideal project for learning and demonstrating fundamental React concepts."
              ghLink="https://github.com/kapil894/TODO-LIST-App"
              demoLink="https://dynamic-kangaroo-121fc8.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gift}
              isBlog={false}
              title="The Gifting Tree"
              description="Gifting Tree is an eCommerce website designed to simplify the process of finding and purchasing gifts, featuring extensive product categories to cater to various occasions and preferences. The platform boasts an intuitive user interface with seamless navigation and robust search functionality for easy product discovery. A user-friendly shopping cart allows for effortless addition, removal, and modification of items, ensuring a smooth checkout process.."
              ghLink="https://github.com/kapil894/MERN-project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
