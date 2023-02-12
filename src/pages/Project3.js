import React, { useEffect } from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import Project from "../components/Project";

const Project3 = () => {
  const anim = () => {
    const spanner = document.querySelector(".project-anim-1");

    setTimeout(() => {
      spanner.style.display = "none";
    }, 3000);
  };

  useEffect(() => anim(), []);

  return (
    <main className="project-3">
      <Header />
      <Project projectNumber={2} />
      <SlideButtons right={"/contact"} left={"/projet-2"} />
    </main>
  );
};

export default Project3;
