import React, { useEffect } from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import Project from "../components/Project";

const Project4 = () => {
  const anim = () => {
    const hammer = document.querySelector(".project-anim-1");

    setTimeout(() => {
      hammer.classList.add("hammer-active");
      setTimeout(() => {
        hammer.style.display = "none";
      }, 1500);
    }, 200);
  };

  useEffect(() => anim(), []);

  return (
    <main className="project-4">
      <Header />
      <Project projectNumber={3} />
      <SlideButtons right={"/contact"} left={"/projet-3"} />
    </main>
  );
};

export default Project4;
