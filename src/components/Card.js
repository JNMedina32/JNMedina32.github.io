import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../assets/styles/componentsCSS/Card.css";
import { underConstruction } from "../assets/icons/projectsIcons";

export default function Card({ image, title, text, link, type }) {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent((prevState) => !prevState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevState) => (prevState === underConstruction.length - 1 ? 0 : prevState + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`card ${type}`}>
      <CardHeader image={image} />
      <CardBody title={title} text={text} showContent={showContent} toggleContent={toggleContent} />
      <CardFooter link={link} currentIconIndex={currentIconIndex} />
    </div>
  );
}

function CardHeader({ image }) {
  return <div className="cardImgDiv">{image}</div>;
}

function CardBody({ title, text, showContent, toggleContent }) {
  return (
    <div className="cardContent">
      <div className="cardTitle">{title}</div>
      <div className="cardBody" onClick={toggleContent}>
        <p className="cardText">{showContent ? text : "Description"}</p>
      </div>
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

