import "./contact.css";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  NavLink,
} from "reactstrap";
import Github from "../../Pictures/githubIcon.png";
import Linkedin from "../../Pictures/linkedinIcon.png";
import Icon from "../../Pictures/mailIcon.png";
import ResumeIcon from "../../Pictures/resumeIcon.png";
import Resume from "../../Pictures/techResumeactual.pdf";
import { ContactUs } from "../../Sections/ContactUs/ContactUs";
import MediaQuery, { useMediaQuery } from "react-responsive";

const Contact = (props) => {
  const desktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const phone = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div>
      {desktop && (
        <>
        <Row className="d-flex justify-content-center">
          <Card>
            <CardTitle>Contact Me</CardTitle>
            <p className="contactText">
              If you would like to see more of my work or would like to reach
              out, feel free to contact me throught me message section or
              through Linkedin or email by clicking on name next to the icons
              below.
            </p>
            <CardBody>
              <Row className="main-row">
              
              
                <Col className='main-col'>
                
                <Row className="sub-row">
                  <NavLink href="https://github.com/brooksrosenberg" className="contactNav">
                    <img src={Github} alt="Github-Icon" className="logo"></img>{" "} : brooksrosenberg
                  </NavLink>
                  </Row>
                <Row className="sub-row">
                  <NavLink href="https://www.linkedin.com/in/brooks-rosenberg-b8376a142/" className="contactNav">
                    <img
                      src={Linkedin}
                      alt="Linkedin-Icon"
                      className="logo"
                    ></img>{" "} : Brooks-rosenberg
                  </NavLink>
                  </Row>
                  <Row className="sub-row">
                  <NavLink href="https://mail.google.com/" className="contactNav">
                    <img src={Icon} alt=" Mail-Icon" className="logo"></img> :
                    bjtr@bu.edu
                  </NavLink>
                  </Row>
                    <Row className="sub-row">
                  <NavLink href={Resume} className="contactNav">
                    <img
                      src={ResumeIcon}
                      alt="Resume-Icon"
                      className="logo"
                    ></img>{" "} :
                    Resume
                  </NavLink>
                  </Row>
                  </Col>
                <Col className='col-2'>
                  <ContactUs></ContactUs>
                </Col>
              </Row>
            </CardBody>
          </Card>
          </Row>
        </>
      )}
      {phone && (
        <>
          <Row className="d-flex justify-content-center">
          <Card>
            <CardTitle>Contact Me</CardTitle>
            <p className="contactTextp">
              If you would like to see more of my work or would like to reach
              out, feel free to contact me throught me message section or
              through Linkedin or email by clicking on name next to the icons
              below.
            </p>
            <CardBody className="cardBody-phone">
              <Row className="main-row-phone">
              
              
                <Col className='main-col-phone'>
                
                <Row className="sub-row-phone">
                  <NavLink href="https://github.com/brooksrosenberg" className="contactNav-phone">
                    <img src={Github} alt="Github-Icon" className="logo-phone"></img>{" "} : brooksrosenberg
                  </NavLink>
                  </Row>
                <Row className="sub-row-phone">
                  <NavLink href="https://www.linkedin.com/in/brooks-rosenberg-b8376a142/" className="contactNav-phone">
                    <img
                      src={Linkedin}
                      alt="Linkedin-Icon"
                      className="logo-phone"
                    ></img>{" "} : Brooks-rosenberg
                  </NavLink>
                  </Row>
                  <Row className="sub-row-phone">
                  <NavLink href="https://mail.google.com/" className="contactNav-phone">
                    <img src={Icon} alt=" Mail-Icon" className="logo-phone"></img> :
                    bjtr@bu.edu
                  </NavLink>
                  </Row>
                    <Row className="sub-row-phone">
                  <NavLink href={Resume} className="contactNav-phone">
                    <img
                      src={ResumeIcon}
                      alt="Resume-Icon"
                      className="logo-phone"
                    ></img>{" "} :
                    Resume
                  </NavLink>
                  </Row>
                  </Col>
                <Col className='col-2-phone'>
                  <ContactUs className='contactUs-p'></ContactUs>
                </Col>
              </Row>
            </CardBody>
          </Card>
          </Row>
        </>
      )}
    </div>
  );
};


export default Contact;
