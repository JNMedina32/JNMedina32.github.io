import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../assets/styles/componentsCSS/Card.css";
import { underConstruction } from "../assets/icons/projectsIcons";

export default function Card({ image, title, text, link, type, learned }) {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent((prevState) => !prevState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevState) =>
        prevState === underConstruction.length - 1 ? 0 : prevState + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`card`}>
      <CardHeader image={image} />
      <CardBody
        title={title}
        text={text}
        learned={learned}
        showContent={showContent}
        toggleContent={toggleContent}
        type={type}
      />
      <CardFooter link={link} currentIconIndex={currentIconIndex} />
    </div>
  );
}

function CardHeader({ image }) {
  return <div className="cardImgDiv">{image}</div>;
}

function CardBody({ title, text, learned, showContent, toggleContent, type }) {
  return (
    <div className="cardContent">
      <div className="cardTitle">{title}</div>
      {type === "blog" ? (
        <div className="cardBody"> 
          <p className="cardText blog">{text}</p>
        </div>
      ) : (
        <div className="cardBody" onClick={toggleContent}>
          <p className="cardText">{showContent ? text : "Description"}</p>
          <div className="learned">
            <h6>Things I Learned While Developing:</h6>
            <ul>
              {learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function CardFooter({ link, currentIconIndex }) {
  return (
    <div className="cardFoot">
      {link ? (
        <div className="cfContent">
          <a href={link} target="_blank" rel="noreferrer" className="cardLink">
            View
          </a>
        </div>
      ) : (
        <div className="cfContent">
          <h6>Under Construction</h6>
          <motion.div
            className="ucIconDiv"
            key={currentIconIndex}
            initial={{ x: "40%" }}
            animate={{ x: ["40%", "0%", "0%"], y: [0, 0, -30, 0] }}
          >
            {underConstruction[currentIconIndex]}
          </motion.div>
        </div>
      )}
    </div>
  );
}
