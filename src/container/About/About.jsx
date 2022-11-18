import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";

import "./About.scss";

function About() {
  return (
    <div className="app__about">
      <motion.h2
        whileInView={{ opacity: [0, 1] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, type: "tween" }}
        className="head-text"
      >
        ABOUT ME
      </motion.h2>
      <motion.p
        whileInView={{ opacity: [0, 1] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, type: "tween" }}
        className="p-text app__profile"
        style={{ marginTop: 10 }}
      >
        I am a Software Developer with passion for solving problems and
        technology. <br /> I have experience building web applications with
        maintainable, scalable and reusable code. I enjoy learning modern
        <span> frontend</span> web development tools that actually ease
        processes and operation activities.
      </motion.p>
    </div>
  );
}

export default AppWrap(About, "about");
