import "../assets/styles/pagesCSS/Projects.css";
import { projectsBlogs } from "../assets/helpers/projectsBlogs";
import Card from "../components/Card";

export default function Projects() {
  const projects = projectsBlogs.filter((item) => item.type === "project");
  const blogs = projectsBlogs.filter((item) => item.type === "blog");

  return (
    <div className="projectsBlogsPage">
      <span>
        <h1>Projects & Blogs</h1>
      </span>
      <p>
        <span className="vipText2">Note:</span>
        <br />
        Currently looking for a platform to host my full-stack applications:{" "}
        <span className="vipText2">
          <u>rootS</u>TEM & E-CommerceStore
        </span>
      </p>
      <div className="pageContent">
        <h2>Projects</h2>
        <div className="section">
          <div className="sectContent">
            {projects.map((project) => (
              <Card
                key={project.title}
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
            {blogs.map((blog) => (
              <Card
                key={blog.title}
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
