import React from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";

const Projet1 = () => {
  return (
    <div>
      <Header />
      <SlideButtons right={"/contact"} left={"/infos"} />
    </div>
  );
};

export default Projet1;
