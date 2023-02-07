import React from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <SlideButtons right={"/projet-1"} left={"/"} />
    </div>
  );
};

export default About;
