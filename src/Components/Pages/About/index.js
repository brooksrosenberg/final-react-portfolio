import "./about.css";
import React from "react";
import { Link } from 'react-router-dom';
import skills from "../../Information/skills";
import { Card, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import Avatar from "../../Pictures/personalAvatar.png";



class About extends React.Component {
  state = { skills };

  render() {
    return (
      <Card id="about">
        <CardTitle>Hello, my name is</CardTitle>
        <p className="name">Brooks Rosenberg</p>
        <CardBody >
        <br></br>
        <div>
          <p className="desc">
            I am a Colorado-based full-stack web developer. I earned my education at Boston University and Columbia University, and have a degree in Economics. When I am not out fishing, I am helping you make your web based dreams a digital reality. If you like to colaborate, then head over to the <Link to="/contact">Contact</Link> page to reach out. I look forward to hearing from you!
          </p>
          </div>
          <Row>
            
            <Col>
            <p className="skillname">My Skills:</p>
            {this.state.skills.map((skills) => (
              <Row className="myskills"> - {skills.name}</Row>
            ))}
            </Col>
            <Col>
          <img className="avatarImg" src={Avatar} alt="Personal Avatar"></img>
          </Col>
          </Row>
          
        </CardBody>
      
      </Card>
    );
  }
}

export default About;
