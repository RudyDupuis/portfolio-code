import React, { useState } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);

  return (
    <section className="project">
      <div className="project__left">
        <h1>{currentProject.title}</h1>
        <p>
          <i class="fa-solid fa-calendar-days"></i> {currentProject.date}
        </p>
        <p>{currentProject.infos}</p>
      </div>
      <div className="project__right">
        <div className="project__right--img">
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
