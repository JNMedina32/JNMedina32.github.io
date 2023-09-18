import "../assets/styles/pagesCSS/Home.css";
import ProfilePic from "../assets/images/ProfilePic.jpg";

export default function Home() {
  return (
    <div className="homeDiv">
      <div className="homeDiv2">
        <div className="header">
          <h1>
            Hello, My Name is <br />
            <span>JOSHUA MEDINA</span>
          </h1>
        </div>
        <div className="homeContent">
          <div className="homeContentLeft">

              <img src={ProfilePic} alt="profile pic" className="profilePic" />

          </div>
          <div className="homeContentRight">
            <h2>
              <span className="vipText">Full-Stack</span> Software Engineer
            </h2>
            <h3>Army <span>Veteran</span></h3>
          </div>
        </div>
      </div>
    </div>
  );
}
