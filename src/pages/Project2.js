import React, { useEffect } from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import Project from "../components/Project";

const Project2 = () => {
  const anim = () => {
    const saw = document.querySelector(".project-anim-1");
    const plank = document.querySelector(".project-anim-2");
    const page = document.querySelector(".project-2");

    /*** Prevent animation from modifying create scroll ***/
    page.style.height = "document.body.offsetHeight";
    page.style.overflow = "hidden";

    setTimeout(() => {
      plank.classList.add("plank-fall");
      saw.style.display = "none";
      setTimeout(() => {
        plank.style.display = "none";
        page.style.overflow = "inherit";
      }, 2000);
    }, 2000);
  };

  useEffect(() => anim(), []);

  return (
    <main className="project-2">
      <Header />
      <Project projectNumber={1} />
      <SlideButtons right={"/projet-3"} left={"/projet-1"} />
    </main>
  );
};

export default Project2;
