import { useState, useContext } from "react";
import { UserContext } from "../App";
import {
  HomeIcon,
  AboutIcon,
  ProjectsIcon,
  MenuIcon,
  ContactIcon,
  MasterOffIcon,
  MasterOnIcon,
} from "../assets/icons/navbarIcons.js";
import "../assets/styles/componentsCSS/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ initialState, setInitialState }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { userState, userDispatch } = useContext(UserContext);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleInitialState = () => {
    setInitialState((prev) => !prev);
  };

  return (
    <div style={{paddingRight: "20px"}}>
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
      {/* <div className="masterLight" onClick={toggleInitialState}>
        {initialState ? <MasterOnIcon /> : <MasterOffIcon />}
        <span className="tooltip-text">Toggle/Reset Theme for every page</span>
      </div> */}
    </nav>
    </div>
  );
}
