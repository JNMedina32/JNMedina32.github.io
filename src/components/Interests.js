import "../assets/styles/componentsCSS/Interests.css";
import {
  PlaneIcon,
  MapIcon,
  TerminalIcon,
  MusicIcon,
} from "../assets/icons/interestsIcons";
import Chessboard from "./interestsSections/Chessboard";
import { useState, useEffect } from "react";

export default function Interests() {
  const [showContent, setShowContent] = useState({});

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
            <PlaneIcon />
          )}
        </div>
        <div className="traveling" onClick={() => toggleContent("traveling")}>
          {showContent.traveling ? (
            <div className="interest">
              <h4>Traveling</h4>
              <p>I Love to travel!</p>
            </div>
          ) : (
            <MapIcon />
          )}
        </div>
        <div className="coding" onClick={() => toggleContent("coding")}>
          {showContent.coding ? (
            <div className="interest">
              <h4>Coding</h4>
              <p>I love to code! I started coding in 2019 and have been</p>
            </div>
          ) : (
            <TerminalIcon />
          )}
        </div>
        <div className="music" onClick={() => toggleContent("music")}>
          {showContent.music ? (
            <div className="interest">
              <h4>Music</h4>
              <p>I love to listen to music!</p>
            </div>
          ) : (
            <MusicIcon />
          )}
        </div>
      </div>
    </div>
  );
}
