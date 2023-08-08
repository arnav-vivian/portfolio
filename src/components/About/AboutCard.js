import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arnav Singh </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />I am a junior pursuing B.E in Informationn Science in BIT
            Bengaluru.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Beatufiul and user-friendly Websites
            </li>
            <li className="about-activity">
              <ImPointRight /> Investing in Stocks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build a different self!"{" "}
          </p>
          <footer className="blockquote-footer">Arnav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
