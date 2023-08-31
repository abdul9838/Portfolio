import React from "react";
import "./about.css";
const About = () => {
  return (
    <section id="About">
      <div className="about">
        <div className="top">
          <h1>What I do</h1>
          <p>
            I am a skilled and passionate web developer and designer with
            experience in creating user-friendly websites. <br /> I have a
            strong understanding of design and a keen eye for detail. I am
            proficient in
            <br />
            <u>HTML, CSS, JAVASCRIPT, PYTHON</u> and <u> REACT</u> as well.
          </p>
        </div>
        <div className="skill">
          <img src={process.env.PUBLIC_URL + "/assets/ui-design.png"} alt="" />
          <h3>UI/UX Design</h3>
        </div>
        <div className="skill">
          <img
            src={process.env.PUBLIC_URL + "/assets/website-design.png"}
            alt=""
          />
          <h3>Website Design</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
