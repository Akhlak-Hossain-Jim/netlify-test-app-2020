import React from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./css/App.css";

function Contact() {
  function mOver() {
    document.getElementById("wrot").innerHTML = "Contact | Jim";
  }
  function mOut() {
    document.getElementById("wrot").innerHTML = "Jim";
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_vlqgvc7",
        e.target,
        "user_QCp5pLhEifTk4hSflAOkZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your message sent successfully")
    e.target.reset();
  }

  return (
    <div className="contact">
      <div id="black-bg">
        <div className="bakto-rot">
          <Link to="/" id="wrot" onMouseOver={mOver} onMouseOut={mOut}>
            Jim
          </Link>
        </div>

        

        <form className="contact__form" onSubmit={sendEmail}>
          <h2>Leave a message</h2>
          <input type="hidden" name="subject" value="Genarel contact" />
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
