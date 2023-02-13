import React, { useEffect, useRef } from "react";

const DynamicText = () => {
  const activeTimeouts = useRef([]);

  useEffect(() => {
    const target = document.getElementById("text-target");
    let words = ["Javascript", "React et redux js", "HTML CSS et Sass"];
    let wordIndex = 0;
    let letterIndex = 0;
    let letterIndexRemoving = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add(
        words[wordIndex][letterIndex] !== " "
          ? words[wordIndex][letterIndex] + letterIndex
          : "esp" + letterIndex
      );
      letter.textContent = words[wordIndex][letterIndex];
    };

    const removeLetter = () => {
      letterIndexRemoving--;
      const element = document.querySelector(
        `.${
          words[wordIndex][letterIndexRemoving] !== " "
            ? words[wordIndex][letterIndexRemoving] + letterIndexRemoving
            : "esp" + letterIndexRemoving
        }`
      );
      if (element) {
        element.remove();
      }
    };

    const loop = () => {
      const timeout = setTimeout(() => {
        if (wordIndex >= words.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < words[wordIndex].length) {
          createLetter();
          letterIndex++;
          letterIndexRemoving = letterIndex;
          loop();
        } else {
          if (letterIndexRemoving > 0 && letterIndexRemoving === letterIndex) {
            const removeTimeout = setTimeout(() => {
              removeLetter();
              loop();
            }, 2000);
            activeTimeouts.current.push(removeTimeout);
          } else if (letterIndexRemoving > 0) {
            removeLetter();
            loop();
          } else {
            letterIndex = 0;
            wordIndex++;
            loop();
          }
        }
      }, 80);
      activeTimeouts.current.push(timeout);
    };
    loop();

    return () => {
      activeTimeouts.current.forEach((timeout) => clearTimeout(timeout));
      activeTimeouts.current = [];
    };
  }, []);

  return <span id="text-target"></span>;
};

export default DynamicText;
