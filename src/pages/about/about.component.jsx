import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/rohannaam.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mr-2 mb-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Rohan J Rao</strong>
                <br />A Engineer and a Learner, born and brought up
                in India. I am a Junior Web Developer with React.js, Redux,
                Express.js, Node.js and PostgreSQL as my tech stack.
                <br />
                In 2020, I successfully completed my Engineering with
                specialization in 'Electronics and Telecommunication'.
                <br />
                Working with Websites, Adding new features, Playing with CSS and JavaScript is what i do.<br />
                My Goal is to be an Expert in JavaScript.


                <br />
                Being a Self Taught Programmer I have encountered thousands of errors which ultimately taught me how to
                Survive in this World of Programming.
                <br />
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Lets talk
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://github.com/rohannaam221b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/rohan-rao-3a78b7188/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
