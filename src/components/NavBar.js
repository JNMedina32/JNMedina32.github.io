import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../assets/styles/ThemeContext.js";
import {
  HomeIcon,
  AboutIcon,
  ProjectsIcon,
  MenuIcon,
  ContactIcon,
  SunIcon,
  MoonIcon,
} from "../assets/icons/navbarIcons.js";
import "../assets/styles/componentsCSS/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="navBarContainer" >
      <nav className="navBar">
        <div className="menu-toggle" onClick={toggleMenu}>
          <MenuIcon />
          <span className="tooltip-text">Toggle Menu</span>
        </div>
        <div className={`collapse-menu ${isCollapsed ? "" : "show"}`}>
          <Link to="/">
            <div className="icon-wrapper">
              <HomeIcon />
              <span className="tooltip-text">Home</span>
            </div>
          </Link>
          <Link to="/about">
            <div className="icon-wrapper">
              <AboutIcon />
              <span className="tooltip-text">About Me</span>
            </div>
          </Link>
          <Link to="/projects">
            <div className="icon-wrapper">
              <ProjectsIcon />
              <span className="tooltip-text">Projects I have worked on</span>
            </div>
          </Link>
          <Link to="/contact">
            <div className="icon-wrapper">
              <ContactIcon />
              <span className="tooltip-text">Contact Me</span>
            </div>
          </Link>
        </div>
        <div className="icon-wrapper" onClick={toggleTheme}>
          {theme["--BG"] === "#edf1e6" ? <SunIcon /> : <MoonIcon />}
          <span className="tooltip-text">Toggle Theme</span>
        </div>
      </nav>
    </div>
  );
}
