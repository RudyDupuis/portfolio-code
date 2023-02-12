import React, { useState } from "react";
import { motion } from "framer-motion";

const PhotoOfMe = () => {
  const [inProgress, setInProgress] = useState(false);

  const kickAnim = () => {
    if (inProgress !== true) {
      setInProgress(true);
      document.querySelector(".hammer").classList.add("hammer-active");

      setTimeout(() => {
        document.querySelector(".photo-of-me") &&
          document
            .querySelector(".photo-of-me")
            .classList.add("photo-kick-anim");
      }, 600);

      setTimeout(() => {
        document.querySelector(".photo-of-me") &&
          document
            .querySelector(".photo-of-me")
            .classList.remove("photo-kick-anim");
        document.querySelector(".hammer") &&
          document.querySelector(".hammer").classList.remove("hammer-active");
        setInProgress(false);
      }, 2000);
    }
  };

  const variants = {
    initial: {
      y: 100,
    },
    final: {
      transition: { duration: 0.5 },
      y: 0,
    },
  };

  return (
    <motion.div
      className="photo-of-me"
      initial="initial"
      animate="final"
      variants={variants}
    >
      <div className="photo-of-me__container" onClick={() => kickAnim()}>
        <div className="photo-1"></div>
        <div className="photo-2"></div>
        <div className="hammer"></div>
        <p>
          Ne pas cliquer,
          <br /> Merci.
        </p>
      </div>
    </motion.div>
  );
};

export default PhotoOfMe;
