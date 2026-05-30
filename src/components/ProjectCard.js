import { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";

import youtubeIcon from '../assets/img/youtube.svg';
import githubIcon from '../assets/img/github-mark-white.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Col size={12} sm={6} md={4} onClick={() => setShowModal(true)} className="proj-card-col">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="popup-content">
            <img src={imgUrl} alt={title} />
            <p>{description}</p>
            <div className="social-icon">
              {link.youtube && (
                <a href={link.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              )}
              {link.github && (
                <a href={link.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              )}
              {link.instagram && (
                <a href={link.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
