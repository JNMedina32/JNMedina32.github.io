import "../../assets/styles/componentsCSS/Coding.css";
import {
  motion,
  useAnimate,
  useInView,
  stagger,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function TerminalAnimation() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(true);

  const cursorSequence = [
    [".terminalCursor", { opacity: [0, 1] }, { duration: 0.5 }],
  ];

  const showCursor = (cursor, setCursor, num) => {
    if (!cursor) {
      setCursor(true);
    }
    setTimeout(() => {
      setCursor(false);
    }, num);
  };

  useEffect(() => {
    if (isInView) {
      animate(cursorSequence, { repeat: Infinity });
      animate(
        ".terminalLine",
        { width: ["0%", "100%"], opacity: [0, 1] },
        {
          duration: 3,
          opacity: { duration: 0.5 },
          delay: stagger(4),
        }
      );
      showCursor(showCursor1, setShowCursor1, 4000);
      showCursor(showCursor2, setShowCursor2, 8000);
    }
  }, [isInView]);

  return (
    <motion.div className="codingAnimation" ref={scope}>
      <section id="firstLine" className="terminalLineContainer">
        <div className="terminalLine">
          <p
            className="terminalCursor"
            style={showCursor1 ? { display: "block" } : { display: "none" }}
          />
          <p className="terminalText">&gt; npm install framer-motion</p>
        </div>
      </section>
      <section id="secondLine" className="terminalLineContainer">
        <div className="terminalLine">
          <p
            className="terminalCursor"
            style={showCursor2 ? { display: "block" } : { display: "none" }}
          />
          <p className="terminalText">&gt; cd my-react-app</p>
        </div>
      </section>
      <section id="thirdLine" className="terminalLineContainer">
        <div className="terminalLine">
          <p className="terminalCursor" />
          <p className="terminalText">&gt; npm start</p>
        </div>
      </section>
    </motion.div>
  );
}
