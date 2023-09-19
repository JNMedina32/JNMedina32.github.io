import "../assets/styles/componentsCSS/Interests.css";
import Skydiving from "./interestsSections/Skydiving";
import Music from "./interestsSections/Music";
import Traveling from "./interestsSections/Traveling";
import Coding from "./interestsSections/Coding";
import Chessboard from "./interestsSections/Chessboard";
import { useState } from "react";
import touchSVG from "../assets/icons/touchSVG.svg";

export default function Interests() {
  const [showContent, setShowContent] = useState({});
  const travelLocations = [
    "Hawaii",
    "France",
    "Portugal",
    "Spain",
    "England",
    "Qatar",
    "Kuwait",
    "Costa Rica",
    "Puerto Rico",
    "Albania",
    "Turkey",
    "Various US States",
  ];

  const toggleContent = (contentKey) => {
    setShowContent((prevState) => ({
      ...prevState,
      [contentKey]: !prevState[contentKey],
    }));
  };

  return (
    <div className="interestsSection">
      <div className="header">
        <h1>
          <span>Interests</span>
        </h1>
        <div className="touchDiv">
          <img src={touchSVG} alt="touch" className="touchSvg" />
          <p>Click each to learn more</p>
        </div>
      </div>  
      <div className="interestsDiv">
        <div className="chess" onClick={() => toggleContent("chess")}>
          {showContent.chess ? (
            <div className="interest">
              <h4>
                <span>Chess</span>
              </h4>
              <p>
                I started playing chess in fourth grade and initially lost. With
                guidance from my father, I improved and began winning.
                Throughout my time abroad or while deployed, we continued to
                play, sharing our moves through chess notation, each maintaining
                our own boards.
              </p>
            </div>
          ) : (
            <Chessboard />
          )}
        </div>
        <div className="skydiving" onClick={() => toggleContent("skydiving")}>
          {showContent.skydiving ? (
            <div className="interest">
              <h4>
                <span>Jumping from planes!</span>
              </h4>
              <p>
                The first time I jumped from a plane while in flight was during
                the third week of the US Army Airborne School. Although I was
                terrified at first, I loved the feeling of overcoming my fears
                and the thrill that accompanied it. It was the beginning of one
                of my favorite hobbies, Skydiving!
              </p>
            </div>
          ) : (
            <Skydiving />
          )}
        </div>
        <div className="traveling" onClick={() => toggleContent("traveling")}>
          {showContent.traveling ? (
            <div className="interest">
              <h4>
                <span>Traveling</span>
              </h4>
              <p>
                Raised in South Florida, my first duty station was in Alaska.
                The moment I stepped outside the airport and I saw mountains for
                the first time, I knew I wanted to see what the rest of the
                world had to offer. Since then I have been to:{" "}
                <ul className="locations">
                  {travelLocations.map((location) => (
                    <li key={location}>{location}</li>
                  ))}
                </ul>{" "}
              </p>
            </div>
          ) : (
            <Traveling />
          )}
        </div>
        <div className="coding" onClick={() => toggleContent("coding")}>
          {showContent.coding ? (
            <div className="interest">
              <h4>
                <span>Coding</span>
              </h4>
              <p>
                During the COVID-19 slowdown in Qatar, I began exploring coding
                through freeCodeCamp.org's HTML & CSS courses. However, it was
                their JavaScript curriculum that ignited my passion for coding,
                fostering my transition into this field due to its demand for
                critical thinking and problem-solving skills.
              </p>
            </div>
          ) : (
            <Coding />
          )}
        </div>
        <div className="music" onClick={() => toggleContent("music")}>
          {showContent.music ? (
            <div className="interest">
              <h4>
                <span>Playing the Piano</span>
              </h4>
              <p>
                Another hobby picked up during the COVID-19 slowdown, I
                rekindled my childhood interest in piano playing. While the
                aspiration to perform in a symphony may remain unrealized, I
                find great fulfillment in honing my skills and witnessing my own
                progression.
              </p>
            </div>
          ) : (
            <Music />
          )}
        </div>
      </div>
    </div>
  );
}
