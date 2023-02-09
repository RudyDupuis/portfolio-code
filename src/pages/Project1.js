import React from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <div>
      <Header />
      <Project projectNumber={0} />
      <SlideButtons right={"/projet-2"} left={"/infos"} />
    </div>
  );
};

export default Project1;
