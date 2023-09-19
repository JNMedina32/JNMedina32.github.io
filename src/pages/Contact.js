import "../assets/styles/pagesCSS/Contact.css";
import ContactForm from "../components/ContactForm";
import LinkedInIcon from "../assets/images/contactIms/LinkedInIcon.png";
import gitHub from "../assets/icons/skillsicons/github.svg";

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="contactHeader">
        <span>
          <h1>Contact Me!</h1>
        </span>
        <h3>Please feel free to contact me using your preferred method:</h3>
      </div>
      <div className="contactInfoDiv">
        <div className="info">
          <h3>Email: </h3>
          <div>
            <address>
              <a href="mailto:JNMedina.Dev@gmail.com">JNMedina.Dev@gmail.com</a>
            </address>
          </div>
        </div>
        <div className="info">
          <h3>LinkedIn:</h3>
          <div className="linkedInIcon">
            <a
              href="https://www.linkedin.com/in/jnmedinadev/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn Icon"
                className="linkedImage"
              />
            </a>
          </div>
        </div>
        <div className="info">
          <h3>GitHub:</h3>
          <div className="linkedInIcon">
            <a
              href="https://github.com/JNMedina32"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHub} alt="GitHub Icon" className="linkedImage" />
            </a>
          </div>
        </div>
      </div>
      <div className="contactFormContainer">
        <h3>
          Or
          <br />
          Send a Message Here
        </h3>
        <div className="contactFormDiv">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
