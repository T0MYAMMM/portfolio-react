import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import headerImg from "../assets/img/surfer.svg";
import { useTypewriter } from '../hooks/useTypewriter';

const GREETINGS = ["Hi!", "안녕!", "你好!", "Bonjour!", "Ciao!", "привет!", "مرحبًا!", "Merhaba!"];

export const Banner = () => {
  const text = useTypewriter(GREETINGS, 2000);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  style={{ background: "rgba(11, 12, 30, 0.5)", padding: "50px", borderRadius: 50 }}
                >
                  <h1>
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                    {`, I'm Tom`}
                  </h1>
                  <p style={{ color: '#fff' }}>
                    Thomas is a student at Bandung Institute of Technology (ITB) majoring in
                    Information System and Technology. He has a passion for exploring new things,
                    especially in the fields of information technology such as artificial intelligence,
                    IT project/product management, and system design. He actively participates in
                    various campus organizations including HMIF and ASSISTS.
                  </p>
                  <button onClick={() => window.location.href = 'https://www.instagram.com/portofolionyatom/'}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
