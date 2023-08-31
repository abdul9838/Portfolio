import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div id="navbar">
        <div className="nav">
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}
            className="navlink"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="About"
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
            className="navlink"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            className="navlink"
          >
            Contact
          </Link>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/assets/menu.png"}
          onClick={() => setMenu(!menu)}
          alt=""
        />
        <div className="mobile" style={{ display: menu ? "flex" : "none" }}>
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            offset={-100}
            duration={500}
            smooth={true}
            className="moblink"
            onClick={() => setMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="About"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            className="moblink"
            onClick={() => setMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            smooth={true}
            spy={true}
            offset={-50}
            duration={500}
            className="moblink"
            onClick={() => setMenu(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
