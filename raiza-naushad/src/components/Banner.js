import { useState,useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/images/banner.jpg"


export const Banner = () => {
const toRotate = ["Web Designer", "Developer", "Database Analyst"]
const [loopNum, setLoopNum] = useState(0);
const period = 1000;
const [isDeleting, setIsDeleting] = useState(false);
const [text, setText] = useState('');
const [delta, setDelta] = useState(200 - Math.random() * 100);
const [index, setIndex] = useState(1);

useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return(
      <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Warm welcome to my portfolio</span>
                    <h1>{'I am Raiza Naushad'}</h1>
                    <h2><span className="wrap">'{text}'</span></h2>
                    <p>Trying to be best of both worlds! </p>
                    <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                </Col>
                <Col  xs={12} md={6} xl={5}>
                 <img src={headerImg} alt="Banner Image"/>
                </Col>
            </Row>
        </Container>
      </section>  
    )

}