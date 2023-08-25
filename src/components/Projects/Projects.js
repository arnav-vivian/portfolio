import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import booking from "../../Assets/Projects/booking.png"

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
              imgPath={chatify}
              isBlog={false}
              title="BookingBook"
              description="A booking website is an online platform that allows users to book various types of services or products, such as hotel rooms, flights, rental cars, and tickets for events, providing information about the availability and prices of the services or products that are offered."
            // ghLink=""
            //demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio Website"
              description="Currently the web page we are surfing on is a very own designed web application using modern day tools like React, Material UI. It describes my journey as a web developer and my learnings ."
              ghLink="https://github.com/arnav-vivian/portfolio"
              demoLink="https://portfolioarnav31.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="KhetiMitra"
              description="•It is an all in one all to cater all the needs of a Farmer from sowing seeds to selling the crops. It provides various helping hands like crop recomendation , weather forecast , market price of crops , soil health card , etc."
              ghLink="https://github.com/agrothon"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TinDog"
              description="It is basically a dating website for dogs inspired by tinder.It was made for the purpose of learning and fun as i am a dog lover."


            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tip Calculator"
              description="It is a tip calculator that can be used to
              distribute money among friends and groups
              while also adding a tip."

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
