import ConditionalRenderingBlog from "../images/projectsImgs/ConditionalRenderingBlog.jpg";
import Ecommerce from "../images/projectsImgs/EcommerceStore.jpg";
import MiddlewareBlog from "../images/projectsImgs/MiddlewareBlog.webp";
import PassportJS from "../images/projectsImgs/Passport.jsBlog.webp";
import RecipeApp from "../images/projectsImgs/RecipeApp.png";
import RegexBlog from "../images/projectsImgs/RegexBlog.png";
import MyAppSTEM from "../images/projectsImgs/MyAppSTEM.jpg";

export const projectsBlogs = [
  {
    image: <img src={MyAppSTEM} alt="MyAppSTEM" className="projImg" />,
    title: (
      <h3>
        <u>rootS</u>TEM
      </h3>
    ),
    text: "This is my most recent web application. The purpose of this application is to serve as an alternative to TikTok or YouTube Shorts. It is a video sharing application that allows users to upload videos, like videos, and comment on videos, all while keeping the focus on STEM, in an educational way. The application utilizes features that enable a user to be questioned on the content of the videos they watch, assisting with knowledge retention. Future possibilites might include accessibility to grade specific content to assist users still in grade school with learning the required information to progress to the next grade. This application is still in development.",
    link: "",
    type: "project",
    learned: ["Improved upon previous skills", "Google OAuth2", "Passport.js", "YouTube API", "Pool", "Connecting Frontend to Backend",],
  },
  {
    image: <img src={Ecommerce} alt="Ecommerce" className="projImg" />,
    title: "E-Commerce Store",
    text: "This is an e-commerce store that I built. It is a full-stack application that allows users to browse products, add products to their cart, and checkout.",
    link: "",
    type: "project",
    learned: ["Improved upon previous skills", "PostgreSQL", "pgAdmin4", "React", "Express.js", "Bootstrap", "SQL Queries" ],
  },
  {
    image: <img src={RecipeApp} alt="RecipeApp" className="projImg" />,
    title: "Recipes Made Easy",
    text: "This is the first application I ever built. It is a recipe application that allows users to search for recipes by a wide variety of criteria. Users can also save recipes to their favorites.",
    link: "https://jnmedina32.github.io/Recipe_App/",
    type: "project",
    learned: ["HTML5", "CSS3", "JavaScript", "APIs", "Local Storage", "Responsive Design", "Git", "GitHub", "GitHub Pages"],
  },
  {
    image: <img src={PassportJS} alt="PassportJS" className="projImg" />,
    title:
      "A Guide to Setting Up Passport.js Google Strategy with PostgreSQL, Express, React, and Node.js",
    text: "Specifically for PostgreSQL, Express.js, React, and Node.js applications, this article was written after many, many hours of research and implementation in my rootSTEM application. I wanted to make the process easier for other developers.",
    link: "https://dev.to/jnmedina32/a-guide-to-setting-up-passportjs-google-strategy-with-postgresql-express-react-and-nodejs-2e7d",
    type: "blog",
  },
  {
    image: <img src={RegexBlog} alt="RegexBlog" className="projImg" />,
    title:
      "A Beginner's Guide to Regular Expressions Methods: Simplifying Syntax and Usage",
    text: "This was the first blog I ever wrote as a developer. My time learning regular expressions(Regex) was one of the main catlysts for my pursuit of software engineering. The required attention to detail and logic is appealing to me. I share some of what I learned here.",
    link: "https://dev.to/jnmedina32/a-beginners-guide-to-regular-expressions-methods-simplifying-syntax-and-usage-1jhl",
    type: "blog",
  },
  {
    image: (
      <img
        src={ConditionalRenderingBlog}
        alt="ConditionalRenderingBlog"
        className="projImg"
      />
    ),
    title: "Conditional Rendering in React && Build Dynamic User Interfaces",
  text: "I first began working in React during the development of my E-Commerce store, which inevitably led to me utilizing conditional rendering. Although I used it on the E-Commerce, project, I really began unleashing it's full potential while working on my rootSTEM application. I've also used it on this very page.",
    link: "https://dev.to/jnmedina32/conditional-rendering-in-react-build-dynamic-user-interfaces-5a20",
    type: "blog",
  },
  {
    image: (
      <img src={MiddlewareBlog} alt="MiddlewareBlog" className="projImg" />
    ),
    title:
      "Express Middleware as the Nightclub Bouncer: Ensuring VIP Access to Your App",
    text: "During my time working on my E-Commerce store, I refined my knowledge about middleware and how to implement them as authenticators for a developers backend. I wanted to share my knowledge on the subject.",
    link: "https://dev.to/jnmedina32/express-middleware-as-the-nightclub-bouncer-ensuring-vip-access-to-your-app-25j7",
    type: "blog",
  },
];
