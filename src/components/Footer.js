import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/TS_Transparan.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/thomas-stefen-mardianto-940357202/", icon: navIcon1, label: "LinkedIn" },
  { href: "https://github.com/T0MYAMMM/", icon: navIcon2, label: "GitHub" },
  { href: "https://instagram.com/thomaassm", icon: navIcon3, label: "Instagram" },
];

export const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <img src={icon} alt={label} />
              </a>
            ))}
          </div>
          <p>Copyright 2024. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
);
