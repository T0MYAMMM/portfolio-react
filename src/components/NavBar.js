import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "../assets/img/TS_Transparan.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NAV_LINKS = [
  { key: "home", label: "Home", sectionId: "home" },
  { key: "skills", label: "Skills", sectionId: "skills" },
  { key: "projects", label: "Projects", sectionId: "projects" },
];

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const navbarHeight = document.querySelector(".navbar")?.offsetHeight ?? 0;
  window.scrollTo({ top: section.offsetTop - navbarHeight, behavior: "smooth" });
};

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NAV_LINKS.map(({ key, label, sectionId }) => (
              <Nav.Link
                key={key}
                href={`#${sectionId}`}
                className={activeLink === key ? "active navbar-link" : "navbar-link"}
                onClick={() => {
                  setActiveLink(key);
                  scrollToSection(sectionId);
                }}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/thomas-stefen-mardianto-940357202/" aria-label="LinkedIn">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/T0MYAMMM/" aria-label="GitHub">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://instagram.com/thomaassm" aria-label="Instagram">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
