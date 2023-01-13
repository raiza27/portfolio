import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/images/skill1-sql.png"
import skill2 from "../assets/images/skill2-html.png"
import skill3 from "../assets/images/skill3-css.png"
import skill4 from "../assets/images/skill4-js.png"
import skill5 from "../assets/images/skill5-react.png"
import skill6 from "../assets/images/skill6-db.png"
import skill7 from "../assets/images/skill7-data.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                  
                    <div className="skill-bx">
                      <h2>Skills</h2>  
                      <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                         <img src={skill1} alt="sql"/>
                         <h5>SQL</h5>
                        </div>
                        <div className="item">
                         <img src={skill7} alt="data"/>
                         <h5>Data</h5>
                        </div>
                        <div className="item">
                         <img src={skill2} alt="html"/>
                         <h5>HTML</h5>
                        </div>
                        <div className="item">
                         <img src={skill3} alt="css"/>
                         <h5>CSS</h5>
                        </div>
                        <div className="item">
                         <img src={skill4} alt="js"/>
                         <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                         <img src={skill5} alt="react"/>
                         <h5>React</h5>
                        </div>
                        <div className="item">
                         <img src={skill6} alt="db"/>
                         <h5>Database</h5>
                        </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
          
        </section>
      )
}