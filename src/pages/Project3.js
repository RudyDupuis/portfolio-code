import React from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <div>
      <Header />
      <Project projectNumber={2} />
      <SlideButtons right={"/contact"} left={"/projet-2"} />
    </div>
  );
};

export default Project3;
