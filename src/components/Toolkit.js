import React from "react";
import { motion } from "framer-motion";

const Toolkit = () => {
  const fallAnim = () => {
    document.querySelector(".kit").classList.add("kit-fall");
    document.querySelector(".tools").classList.add("tools-fall");
  };

  const variants = {
    initial: {
      y: -200,
      opacity: 0,
    },
    final: {
      transition: { duration: 0.7 },
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="toolkit"
      initial="initial"
      animate="final"
      variants={variants}
    >
      <div className="tools">
        <div className="tools__hammer tools__container">
          <div className="tools__img"></div>
          <p>Javascript - Typescript</p>
        </div>
        <div className="tools__measuring-tape tools__container">
          <div className="tools__img"></div>
          <p>HTML - CSS - Sass</p>
        </div>
        <div className="tools__saw tools__container">
          <div className="tools__img"></div>
          <p>React - Redux.js - Next.js</p>
        </div>
        <div className="tools__spanner tools__container">
          <div className="tools__img"></div>
          <p>Git - GitHub</p>
        </div>
        <div className="tools__screwdriver tools__container">
          <div className="tools__img"></div>
          <p>Seo - Regex</p>
        </div>
      </div>
      <div className="kit" onClick={() => fallAnim()}>
        <div className="kit__img"></div>
        <h2>Rudy Dupuis</h2>
      </div>
    </motion.div>
  );
};

export default Toolkit;
