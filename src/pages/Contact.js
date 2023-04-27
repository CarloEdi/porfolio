import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { Context } from "../Context";

function Contact() {
  const { handleChange, formInfoState } = useContext(Context)
  const [sentEmail, setSentEmail] = useState(false)
  const [emailAlertText, setEmailAlertText] = useState("Sending...")
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSentEmail(true)

    emailjs
      .sendForm(
        "service_ui3uh3b",
        "template_qoo9fva",
        form.current,
        "HUYZ5CJo_tkfUngCa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
          sentEmailConfirmation()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const sentEmailConfirmation = () => {
    setEmailAlertText("Success! Message was sent")
    setTimeout(() => {
      setSentEmail(false)
      setEmailAlertText("Sending...")
    }, 5000)
  }
  return (
    <div className="contact-container">
      <div className="contact-buttons-container">
        <a href="https://www.linkedin.com/in/carlos-alvarado-a844a3259/" target="_blank">
        <button className="contact-linkedIn-button">
        <i className="fa-brands fa-linkedin-in"></i>
        </button>
        </a>
        <a href="https://github.com/CarloEdi" target="_blank">
        <button className="contact-github-button">
        <i className="fa-brands fa-github"></i>
        </button>
        </a>
      </div>
      <div className="contact-form">
        <h1><span className="material-symbols-outlined mail-icon">mail
        </span>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" value={formInfoState.user_name} onChange={handleChange} />
          <label>Email</label>
          <input type="email" name="user_email" value={formInfoState.user_email} onChange={handleChange} />
          <label>Message</label>
          <textarea name="message" value={formInfoState.message} onChange={handleChange} />
          <input type="submit" value="Send" />
        { sentEmail && <div className="email-alert">{ emailAlertText }</div> }
        </form>
      </div>
    </div>
  );
}
export default Contact;
