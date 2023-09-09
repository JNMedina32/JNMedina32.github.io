import { useState } from "react";
import validEmailFormat from "../assets/helpers/validEmailFormat.js";
import "../assets/styles/pagesCSS/Contact.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validEmailFormat(formData.email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for your message!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <div className="formGroup">
        <label className="formLabel" htmlFor="firstName">
          First Name *
        </label>
        <br />
        <input
          className="formInput"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="lastName">
          Last Name *
        </label>
        <br />
        <input
          className="formInput"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="email">
          Email *
        </label>
        <br />
        <input
          className="formInput"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="companyName">
          Company Name
        </label>
        <br />
        <input
          className="formInput"
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="phone">
          Phone Number
        </label>
        <br />
        <input
          className="formInput"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="formGroup">
        <label className="formLabel" htmlFor="message">
          Message *
        </label>
        <br />
        <textarea
          className="formTextArea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className="formButton" type="submit">
        Submit
      </button>
    </form>
  );
}
