import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faCloud, faTree } from "@fortawesome/free-solid-svg-icons";
import { altStyles } from "../../assets/helpers/skydivingHelpers";
import ArmyParatrooper from "../../assets/images/interestsImgs/ArmyParatrooper.jpg";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import "../../assets/styles/componentsCSS/Skydiving.css";

export default function Skydiving() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const numberOfClouds = 7;
  const numberOfTrees = 30;


  const sequence = [
    ["div", { x: [-500, 800] }, { duration: 5, ease: "linear" }],
    ["img", { y: [30, 215] }, { at: 2, duration: 4, ease: "linear", }],
  ];

  useEffect(() => {
    if (isInView) {
      animate(sequence, { duration: 10, });
    }
  }, [isInView]);

  return (
    <div className="skydivingAnimation">
      <motion.div className="sky" ref={scope}>
        {[...Array(numberOfClouds)].map((_, index) => (
          <FontAwesomeIcon
            icon={faCloud}
            size="2xl"
            className="cloud"
            key={index}
            style={altStyles("clouds", index)}
          />
        ))}
        <motion.div className="planeAnimationDiv">
          <FontAwesomeIcon icon={faPlane} size="2xl" className="plane" />
        </motion.div>
        <img
          src={ArmyParatrooper}
          alt="Army Paratrooper"
          className="paratrooper"
        />
      </motion.div>
      <div className="ground">
        {[...Array(numberOfTrees)].map((_, index) => (
          <FontAwesomeIcon
            icon={faTree}
            size="2xl"
            className="tree"
            key={index}
            style={altStyles("trees", index)}
          />
        ))}
      </div>
    </div>
  );
}
