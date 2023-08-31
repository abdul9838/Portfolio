import React from "react";
import { Link } from "react-scroll";
import "./home.css";

const Home = () => {
  return (
    <>
      <section id="Home">
        <div className="Home">
          <div className="left">
            <h2>Hello,</h2>
            <h1>
              I'm <span className="Name">Abdul Ahad</span>
            </h1>
            <h1>Website Frontend Developer</h1>
            <p>
              I am a skilled and passionate web developer and designer with
              experience in creating user-friendly websites.
            </p>

            <div className="homebtn">
              <Link
                activeClass="active"
                to="Contact"
                smooth={true}
                spy={true}
                offset={0}
                duration={500}
              >
                <button>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/hireme.png"}
                    alt=""
                  />{" "}
                  Hire me
                </button>
              </Link>

              <a
                href="/Abdul.pdf"
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/downloads.png"}
                    alt=""
                  />
                  Resume
                </button>
              </a>
            </div>
          </div>
          <div className="right">
            <img src={process.env.PUBLIC_URL + "/assets/profile.png"} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
