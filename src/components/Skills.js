import "../assets/styles/componentsCSS/Skills.css";
import {
  lifeSkills,
  frontEndSkills,
  backEndSkills,
  methodologySkills,
  developmentSkills,
} from "../assets/helpers/skillsHelpers.js";

export default function Skills() {
  return (
    <div className="skillsSection">
      <div className="header">
        <h1>
          <span>Skills</span>
        </h1>
      </div>
      <div className="skillsListSection">
        <div className="tier">
          <div className="skillList">
            <h3 className="skillCat">Aquired from Life Lessons</h3>
            <div className="skillsColumn">
              <ul>
                {lifeSkills.map((skill) => (
                  <li key={skill} className="skill">
                    {skill.icon ? (
                      <div className="skillIconDiv">
                        <img
                          className="skillIcon"
                          src={skill.icon}
                          alt={skill.name}
                        />
                      </div>
                    ) : (
                      <div className="myIcon">
                        &lt;
                        <span className="initials">
                          <span className="letter">J</span>
                          <span className="letter">M</span>
                        </span>
                        &gt;
                      </div>
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="skillList">
            <h3 className="skillCat">Coding Skills</h3>
            <div className="skillColumn">
              <div className="tier">
                <div className="skillList">
                  <div className="frontEnd">
                    <h5>
                      <span>Front End</span>
                    </h5>
                    <ul>
                      {frontEndSkills.map((skill) => (
                        <li key={skill.name} className="skill">
                          {skill.icon ? (
                            <div className="skillIconDiv" id={skill.name}>
                              <img
                                className="skillIcon"
                                src={skill.icon}
                                alt={skill.name}
                              />
                            </div>
                          ) : (
                            <div className="myIcon">
                              &lt;
                              <span className="initials">
                                <span className="letter">J</span>
                                <span className="letter">M</span>
                              </span>
                              &gt;
                            </div>
                          )}
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="skillList">
                  <div className="backEnd">
                    <h5>
                      <span>Back End</span>
                    </h5>
                    <ul>
                      {backEndSkills.map((skill) => (
                        <li key={skill.name} className="skill">
                          {skill.icon ? (
                            <div className="skillIconDiv">
                              <img
                                className="skillIcon"
                                src={skill.icon}
                                alt={skill.name}
                              />
                            </div>
                          ) : (
                            <div className="myIcon">
                              &lt;
                              <span className="initials">
                                <span className="letter">J</span>
                                <span className="letter">M</span>
                              </span>
                              &gt;
                            </div>
                          )}
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tier">
                <div className="skillList">
                  <div className="developmentTools">
                    <h5>
                      <span>Development Tools</span>
                    </h5>
                    <ul>
                      {developmentSkills.map((skill) => (
                        <li key={skill} className="skill">
                          {skill.icon ? (
                            <div className="skillIconDiv">
                              <img
                                className="skillIcon"
                                src={skill.icon}
                                alt={skill.name}
                              />
                            </div>
                          ) : (
                            <div className="myIcon">
                              &lt;
                              <span className="initials">
                                <span className="letter">J</span>
                                <span className="letter">M</span>
                              </span>
                              &gt;
                            </div>
                          )}
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="skillList">
                  <div className="methodologies">
                    <h5>
                      <span>Methodologies</span>
                    </h5>
                    <ul>
                      {methodologySkills.map((skill) => (
                        <li key={skill} className="skill">
                          {skill.icon ? (
                            <div className="skillIconDiv">
                              <img
                                className="skillIcon"
                                src={skill.icon}
                                alt={skill.name}
                              />
                            </div>
                          ) : (
                            <div className="myIcon">
                              &lt;
                              <span className="initials">
                                <span className="letter">J</span>
                                <span className="letter">M</span>
                              </span>
                              &gt;
                            </div>
                          )}
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
