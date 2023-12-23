import React, { useContext, useState, useRef } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [formStatus, setFormStatus] = useState(null);
  const formRef = useRef(null);
  const base_url_frontend = 'https://akashportfoliobackend.onrender.com/api/v1/user';

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${base_url_frontend}/create`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.target.user_name.value,
          email: e.target.user_email.value,
          message: e.target.message.value,
        }),
      });

      if (response.ok) {
        // Clear form inputs on successful submission
        formRef.current.reset();
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {formStatus === "success" ?
        <div className="c-right">
          <span className="Thanks-msg">Thanks for contacting me!</span>
        </div>
        :
        <div className="c-right">
          <form ref={formRef} onSubmit={handleFormSubmit}>
            <input type="text" name="user_name" className="user" placeholder="Name" />
            <input type="email" name="user_email" className="user" placeholder="Email" />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
            <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
          </form>
        </div>
      }
    </div>
  );
};

export default Contact;
