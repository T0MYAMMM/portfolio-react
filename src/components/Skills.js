import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import pythonImg from "../assets/img/python.png";
import reactImg from "../assets/img/react.png";

const CAROUSEL_RESPONSIVE = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const SKILL_ITEMS = [
  { id: 1, imageUrl: pythonImg, name: "Python" },
  {
    id: 2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    name: "JavaScript",
  },
  { id: 3, imageUrl: reactImg, name: "React" },
  {
    id: 4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    name: "TensorFlow",
  },
  {
    id: 5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    name: "Figma",
  },
  {
    id: 6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/788px-Adobe_Illustrator_CC_icon.svg.png",
    name: "Adobe Illustrator",
  },
];

const SkillItem = ({ name, imageUrl }) => (
  <div className="item">
    <img src={imageUrl} alt={name} />
  </div>
);

export const Skills = () => (
  <section className="skill" id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>
              "Remember, progress is not a destination, but a continuous process fueled
              by the passion for learning and the desire to become better each day."
            </p>
            <Carousel responsive={CAROUSEL_RESPONSIVE} infinite={true} className="skill-slider">
              {SKILL_ITEMS.map(item => (
                <SkillItem key={item.id} name={item.name} imageUrl={item.imageUrl} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
);
