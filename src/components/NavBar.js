import { useState, useContext } from "react";
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
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState("Home");

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const activePage = () => {};

  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <div className="menu-toggle" onClick={toggleMenu}>
          <MenuIcon />
          <span className="tooltip-text">Toggle Menu</span>
        </div>
        <div className={`collapse-menu ${isCollapsed ? "" : "show"}`}>
          <NavLink to="/" exact className="icon-wrapper" onClick={toggleMenu}>
            <HomeIcon />
            <span className="tooltip-text">Home</span>
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active-link"
            className="icon-wrapper"
            onClick={toggleMenu}
          >
            <AboutIcon />
            <span className="tooltip-text">About Me</span>
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="active-link"
            className="icon-wrapper"
            onClick={toggleMenu}
          >
            <ProjectsIcon />
            <span className="tooltip-text">Projects I have worked on</span>
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active-link"
            className="icon-wrapper"
            onClick={toggleMenu}
          >
            <ContactIcon />
            <span className="tooltip-text">Contact Me</span>
          </NavLink>
        </div>
        <div className="icon-wrapper" onClick={toggleTheme}>
          {theme["--BG"] === "#edf1e6" ? <SunIcon /> : <MoonIcon />}
          <span className="tooltip-text">Toggle Theme</span>
        </div>
      </nav>
    </div>
  );
}
