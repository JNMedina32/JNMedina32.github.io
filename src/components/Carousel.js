import { useState, useEffect } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";

import { Link } from "react-router-dom";
import "../assets/styles/Carousel.css";

export default function Carousel({ activeIndex, setActiveIndex }) {
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return <div className="carousel-container"></div>;
}
