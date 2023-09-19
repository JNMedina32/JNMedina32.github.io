import myLogo from "../assets/images/skillsImgs/myLogo.png";
export default function SkillColumn({ skill }) {
  return (
    <li className="skill">
      {skill.icon ? (
        <div className="skillIconDiv">
          <img className="skillIcon" src={skill.icon} alt={skill.name} />
        </div>
      ) : (
        <div className="myLogoDiv">
          <img className="myLogo" src={myLogo} alt="my logo" />
        </div>
      )}
      {skill.name}
    </li>
  );
}
