import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);

  const variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    final: {
      transition: { duration: 0.7 },
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="project">
      <motion.div
        className="project__left"
        initial="initial"
        animate="final"
        variants={variants}
      >
        <h1>{currentProject.title}</h1>
        <p>
          <i className="fa-solid fa-calendar-days"></i> {currentProject.date}
        </p>
        <p>{currentProject.infos}</p>
      </motion.div>
      <div className="project__right">
        <div className="project__right--img">
          <div className="project-anim-1"></div>
          <div className="project-anim-2"></div>
          <img src={currentProject.img} alt={currentProject.title} />
        </div>
        <div className="project__right--buttons">
          <a
            href={currentProject.webLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Voir le site</button>
          </a>
          <a
            href={currentProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Voir le GitHub</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
