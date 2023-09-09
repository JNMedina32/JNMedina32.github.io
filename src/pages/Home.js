import "../assets/styles/pagesCSS/Home.css";
import { LightOffIcon, LightOnIcon } from "../assets/icons/navbarIcons";
import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../App";
import ProfilePic from "../assets/images/ProfilePic.jpg";
import Platform from "../components/Platform";

export default function Home() {
  const { userState, userDispatch } = useContext(UserContext);
  const { home, userPosition } = userState;
  const [css, setCss] = useState("light");

  const lightDivRef = useRef(null);

  const toggleTheme = () => {
    userDispatch({
      type: "home",
      payload: home === "dark" ? "light" : "dark",
    });
  };

  // useEffect(() => {
  //   setCss(home);
  //   setTimeout(() => {
  //     const lightDiv = lightDivRef.current.getBoundingClientRect();

  //     const userUnderLight =
  //       userPosition.x >= lightDiv.left && userPosition.x <= lightDiv.right;

  //     if (lightDiv.width !== 0 && userUnderLight) {
  //       toggleTheme();
  //     }
  //   }, 0);
  // }, [userPosition, home]);

  return (
    <div className="homeDiv">
      <div className="header">
        <h1>
          Hello, My Name is <br />
          <span>JOSHUA MEDINA</span>
        </h1>
      </div>
      <div className="homeContent">
        <div className="homeContentLeft">
          <div className="profilePicFrame">
            <img
              src={ProfilePic}
              alt="profile pic"
              className={`profilePic ${css}`}
            />
          </div>
        </div>
        <div className="homeContentRight">
          <h2>
            I am a <span className="vipText">Full-Stack</span> Software Engineer
          </h2>
        </div>
      </div>
      {/* <div ref={lightDivRef} className="lightDiv">
        {home === "dark" ? (
          <LightOffIcon onClick={toggleTheme} />
        ) : (
          <LightOnIcon onClick={toggleTheme} />
        )}
      </div> */}
    </div>
  );
}
