import "../assets/styles/pagesCSS/Projects.css";
import { projectsBlogs } from "../assets/helpers/projectsBlogs";
import Card from "../components/Card";

//loop through projectsBlogs array and render each item as a Card component

export default function Projects() {
  let projects = [];
  let blogs = [];
  projectsBlogs.forEach((item) => {
    if (item.type === "project") {
      projects.push(item);
    } else {
      blogs.push(item);
    }
  });

  return (
    <div className="projectsBlogsPage">
      <span>
        <h1>Projects & Blogs</h1>
      </span>
      <p>
        <span className="vipText2">Note:</span>
        <br />
        Currently looking for a platform to host my full-stack applications:{" "}
        <span className="vipText2"><u>rootS</u>TEM & E-CommerceStore</span>
      </p>
      <div className="pageContent">
      <h2>Projects</h2>
        <div className="section">
          <div className="sectContent">
            {projects.map((project, index) => (

                <Card
                  key={index}
                  image={project.image}
                  title={project.title}
                  text={project.text}
                  link={project.link}
                  type={project.type}
                />

            ))}
          </div>
        </div>
        <h2>Blogs</h2>
        <div className="section">
          <div className="sectContent">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                image={blog.image}
                title={blog.title}
                text={blog.text}
                link={blog.link}
                type={blog.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
