import React, { useEffect } from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import PhotoOfMe from "../components/PhotoOfMe";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="about__container">
        <div className="about__container--text">
          <p>
            Je suis un développeur web passionné par le bricolage et les
            technologies. C'est pour moi une source d'inspiration constante dans
            ma vie personnelle et professionnelle. C'est pourquoi j'ai choisi
            d'intégrer cette passion à mon portfolio.
          </p>
          <br />

          <p>
            Mon parcours de développeur débute en juillet 2022, lorsque j'ai
            commencé à me former seul au développement front-end. J'ai
            rapidement acquis une expertise en React et en JavaScript. Je suis
            également très à l'aise avec Redux.js, Next.js.
          </p>
          <br />

          <p>
            Ma motivation pour le développement vient de ma passion pour la
            création de logiciels qui résolvent des problèmes et améliorent la
            vie des utilisateurs. Je suis convaincu que, grâce à mon
            savoir-faire technique et à ma capacité d'adaptation rapide, je peux
            continuer à grandir et à apprendre dans ce domaine passionnant.
          </p>
        </div>
        <PhotoOfMe />
      </div>
      <SlideButtons right={"/projet-1"} left={"/"} />
    </div>
  );
};

export default About;
