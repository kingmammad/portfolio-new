import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todolist from "../../Assets/Projects/todolist.png"
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
              imgPath={todolist}
              isBlog={false}
              title="todo list"
              description="A simple and user-friendly todo list app for managing daily tasks. Users can add new tasks by entering text and clicking  Each task is displayed as a colored card in the list. Users can mark tasks as completed with a green checkmark and delete tasks with a red cross."
              ghLink="https://github.com/kingmammad/todolist"
              demoLink="https://kingmammad.github.io/todo/"
            />
          </Col>
         <div style={{color:"white"}}>
         <p>
         you check all my project in my
          </p> 
           <a
                href="https://github.com/kingmammad"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >github</a>
         </div>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
