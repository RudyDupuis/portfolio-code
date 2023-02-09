import React from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <div>
      <Header />
      <Project projectNumber={1} />
      <SlideButtons right={"/projet-3"} left={"/projet-1"} />
    </div>
  );
};

export default Project2;
