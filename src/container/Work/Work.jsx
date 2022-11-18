import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Work.scss";

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimatedCard({ y: 20, opacity: 0 });

    setTimeout(() => {
      setAnimatedCard({ y: 0, opacity: 1 });
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 200);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data.reverse());
      setFilterWork(data.reverse());
    });
  }, []);

  return (
    <div className="app__works">
      <h2 className="head-text">PROJETS</h2>
      <div className="app__work-filter">
        {["Logical", "UI / UX", "All"].map((item, index) => (
          <div
            key={`categorie ${index}`}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animatedCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={`working${index}`}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.title} />
              <motion.div
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                whileHover={{ opacity: [0, 1] }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    transition={{
                      duration: 0.25,
                    }}
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    transition={{
                      duration: 0.25,
                    }}
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Work, "work");
