import "../assets/styles/pagesCSS/Home.css";
import ProfilePic from "../assets/images/ProfilePic.jpg";

export default function Home() {
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
            <img src={ProfilePic} alt="profile pic" className="profilePic" />
          </div>
        </div>
        <div className="homeContentRight">
          <h2>
            I am a <span className="vipText">Full-Stack</span> Software Engineer
          </h2>
        </div>
      </div>
    </div>
  );
}
