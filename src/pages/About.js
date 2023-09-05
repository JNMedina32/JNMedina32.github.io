import { useState } from "react";
import "../assets/styles/About.css";
import Timeline from "../components/Timeline";
import Interests from "../components/Interests";
import { motion, AnimatePresence } from "framer-motion";
import { contentVariants, tabVariants } from "../assets/helpers/motionVariants";

export default function About() {
  const [activeTab, setActiveTab] = useState("timeline");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="aboutPage">
      <div className="tabBar">
        <motion.button
          className={`tabItem ${activeTab === "timeline" ? "active" : ""}`}
          onClick={() => handleClick("timeline")}
          variants={tabVariants}
          initial="landed"
          whileTap="lifted"
          animate="landed"
        >
          Timeline
        </motion.button>
        <motion.button
          className={`tabItem ${activeTab === "interests" ? "active" : ""}`}
          onClick={() => handleClick("interests")}
          variants={tabVariants}
          initial="landed"
          whileTap="lifted"
          animate="landed"
        >
          Interests
        </motion.button>
      </div>
      <motion.div className="contentWrapper" variants={contentVariants}>
        <AnimatePresence mode="wait">
          {activeTab === "timeline" ? (
            <motion.div
              className="content"
              key="timeline"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Timeline />
            </motion.div>
          ) : (
            <motion.div
              className="content"
              key="interests"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Interests />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
