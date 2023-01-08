import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo.png'
import iconLinkedin from '../assets/images/icon-linked.png'
import iconGit from '../assets/images/icon-github.png'


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/raiza-naushad"><img src={iconLinkedin} target="_blank" alt="linkedin"/></a>
              <a href="https://github.com/raiza27"><img src={iconGit} target="_blank" alt="git"/></a>
             
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}