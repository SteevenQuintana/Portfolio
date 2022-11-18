import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        className="app__header-info"
        transition={{ duration: 0.6 }}
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      >
        <div className="app__header-badge">
          <div className="app__flex">
            <div style={{ marginLeft: 20 }}>
              <p
                className="p-text"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                }}
              >
                Hello <span>🌎</span>
              </p>
              <h1 className="head-text">I'm Steven Quintana</h1>
            </div>
          </div>
          <div className="tag-cmp">
            <p className="p-text">Frontend Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
