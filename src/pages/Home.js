import React from "react";
import SlideButtons from "../components/SlideButtons";
import DynamicText from "../components/DynamicText";
import Header from "../components/Header";
import Toolkit from "../components/Toolkit";

const Home = () => {
  return (
    <main className="home">
      <Header />
      <Toolkit />
      <h1>
        Développeur <DynamicText />
        <span className="input-bar">|</span>
      </h1>
      <SlideButtons right={"/infos"} />
    </main>
  );
};

export default Home;
