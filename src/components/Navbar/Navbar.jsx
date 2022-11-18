import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const pages = ["home", "about", "work", "testimonials", "contact"];

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h4>[SQ]</h4>
        <p>frontend developer</p>
      </div>
      <ul className="app__navbar-links">
        {pages.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a className={item} href={`#${item}`}>
              {item} <div />
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {pages.map((item) => (
                <li key={`mobileLink-${item}`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
