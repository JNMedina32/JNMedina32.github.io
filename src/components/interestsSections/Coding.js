import "../../assets/styles/componentsCSS/Coding.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TerminalAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: { duration: 1 },
    });

    controls.start({
      scale: [1, 1.02],
      transition: { yoyo: Infinity, duration: 0.5 },
    });
  }, [controls]);

  return (
    <motion.div
      className="codingAnimation"
      animate={controls}
    >
      <motion.div
        className="terminalContent"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 1, duration: 2, ease: "linear" }}
      >
        &gt; npm install framer-motion{"\n"}
        &gt; cd my-react-app{"\n"}
        &gt; npm start{"\n"}
      </motion.div>
      <motion.div
        className="terminalCursor"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0] }}
        transition={{ yoyo: Infinity, duration: 0.5, delay: 3 }}
      ></motion.div>
    </motion.div>
  );
}
