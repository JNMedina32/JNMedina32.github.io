import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import worldMap from "../../assets/images/interestsImgs/worldMap.jpg";
import { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";

import "../../assets/styles/componentsCSS/Travel.css";
import { paperPlaneSequence } from "../../assets/helpers/travelingHelpers";

export default function Traveling() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(paperPlaneSequence(scope), {
        repeat: Infinity,
        repeatType: "loop",
      });
    }
  }, [isInView]);

  return (
    <div className="travelingAnimation">
      <motion.div className="planeDiv" ref={scope}>
        <FontAwesomeIcon icon={faPlane} className="paperPlane" />
      </motion.div>
      <motion.div className="redLine" />
      <div className="mapDiv">
        <img src={worldMap} alt="World Map" className="worldMap" />
      </div>
    </div>
  );
}
