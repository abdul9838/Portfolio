import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4l2psnz",
        "template_3265zpi",
        form.current,
        "BRIuWVR14ScDSDgSy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent !");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section Id="Contact">
      <div className="textContact">
        <h1>Contact Me</h1>
        <p>Please fill out the form below to discuss any work opportinities.</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Enter Your name" name="from_name" />
        <input type="email" placeholder="Enter Your email." name="user_email" />
        <textarea
          placeholder="Emter message..."
          name="message"
          rows="6"
        ></textarea>
        <button value="Send" type="submit">
          Submit
        </button>
      </form>
      <div className="social">
        <img src={process.env.PUBLIC_URL + "/assets/Github.png"} alt="" />
      </div>
    </section>
  );
};

export default Contact;
