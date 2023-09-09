import "../assets/styles/pagesCSS/Contact.css";
import ContactForm from "../components/ContactForm";
import LinkedInIcon from "../assets/images/contactIms/LinkedInIcon.png";

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="contactHeader">
        <h1>
          Contact Me!
        </h1>
        <h3>Please feel free to contact me using your preferred method:</h3>
      </div>
      <div className="contactInfoDiv">
        <div className="info">
          <h3>Email: </h3>
          <div><span>JNMedina.dev@gmail.com</span></div>
        </div>
        <div className="info">
          <h3>LinkedIn:</h3>
          <div className="linkedInIcon">
            <a
              href="https://www.linkedin.com/in/jnmedinadev/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn Icon" style={{width: "30px", height: "30px"}} />
            </a>
          </div>
        </div>
      </div>

      <div className="contactIconDiv"></div>
      <div className="contactFormDiv">
        <ContactForm />
      </div>
    </div>
  );
}
