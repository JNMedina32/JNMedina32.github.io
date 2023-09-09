import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "../assets/styles/componentsCSS/Card.css";
import { underConstruction } from "../assets/icons/projectsIcons";

export default function Card({ image, title, text, link, type }) {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const controls = useAnimation();
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent((prevState) => !prevState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevState) => {
        if (prevState === underConstruction.length - 1) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`card ${type}`}>
      <div className="cardImgDiv">{image}</div>
      <div className="cardContent">
        <div className="cardTitle">{title}</div>
        <div className="cardBody" onClick={toggleContent}>
          {showContent ? (
            <p className="cardText">{text}</p>
          ) : (
            <p className="cardText">Description</p>
          )}
        </div>
        <div className="cardFoot">
          {link ? (
            <div className="cfContent">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="cardLink"
              >
                View
              </a>
            </div>
          ) : (
            <div className="cfContent">
              <h6>Under Construction</h6>

                <motion.div
                  className="ucIconDiv"
                  key={currentIconIndex}
                  initial={{x: "40%" }}
                  animate={{x: ["40%", "0%", "0%"], y: [0, 0, -30, 0] }}
                >
                  {underConstruction[currentIconIndex]}
                </motion.div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
