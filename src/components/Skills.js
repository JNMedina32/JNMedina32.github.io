import "../assets/styles/componentsCSS/Skills.css";

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
            <h4>Aquired from Life Lessons</h4>
            <div className="skillsColumn">
              <ul>
                <li>Leadership</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Attention to Detail</li>
                <li>Work Ethic</li>
                <li>Integrity</li>
                <li>Respect</li>
              </ul>
            </div>
          </div>
          <div className="skillList">
            <h4>Coding Skills</h4>
            <div className="skillColumn">
              <div className="tier">
                <div className="skillList">
                  <div className="frontEnd">
                    <h5>Front End</h5>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Responsive Design</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                </div>
                <div className="skillList">
                  <div className="backEnd">
                    <h5>Back End</h5>
                    <ul>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>SQL</li>
                      <li>PostgreSQL</li>
                      <li>pgAdmin4</li>
                      <li>Passport.js</li>
                      <li>Google OAuth2</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tier">
                <div className="skillList">
                  <div className="developmentTools">
                    <h5>Development Tools</h5>
                    <ul>
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>REST APIs</li>
                    </ul>
                  </div>
                </div>
                <div className="skillList">
                  <div className="methodologies">
                    <h5>Methodologies</h5>
                    <ul>
                      <li>Object-Oriented Programming</li>
                      <li>Model-View-Controller</li>
                      <li>Test-Driven Development</li>
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
