import React, { useState } from "react";

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

  return (
    <div className="photo-of-me" onClick={() => kickAnim()}>
      <img src="./img/photo-of-me.png" alt="Ma tête" className="photo-1" />
      <img
        src="./img/photo-of-me-2.png"
        alt="Ma tête qui s'est prit un coup de marteau"
        className="photo-2"
      />
      <div className="hammer"></div>
    </div>
  );
};

export default PhotoOfMe;
