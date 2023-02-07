import React, { useEffect } from "react";

const DynamicText = () => {
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
      document
        .querySelector(
          `.${
            words[wordIndex][letterIndexRemoving] !== " "
              ? words[wordIndex][letterIndexRemoving] + letterIndexRemoving
              : "esp" + letterIndexRemoving
          }`
        )
        .remove();
    };

    const loop = () => {
      setTimeout(() => {
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
            setTimeout(() => {
              removeLetter();
              loop();
            }, 2000);
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
    };
    loop();
  }, []);

  return <span id="text-target"></span>;
};

export default DynamicText;
