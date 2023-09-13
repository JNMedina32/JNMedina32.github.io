import { useState } from "react";
import "../assets/styles/pagesCSS/About.css";
import Timeline from "../components/Timeline";
import Interests from "../components/Interests";
import Skills from "../components/Skills";
import { motion, AnimatePresence } from "framer-motion";
import { contentVariants, tabVariants } from "../assets/helpers/aboutVariants";

export default function About() {
  const [activeTab, setActiveTab] = useState("interests");

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
        <motion.button
          className={`tabItem ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => handleClick("skills")}
          variants={tabVariants}
          initial="landed"
          whileTap="lifted"
          animate="landed"
        >
          Skills
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
          ) : activeTab === "interests" ? (
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
          ) : (
            <motion.div
              className="content"
              key="skills"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Skills />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
