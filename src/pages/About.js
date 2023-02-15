import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import PhotoOfMe from "../components/PhotoOfMe";
import { motion } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    /*** Prevent animation from modifying create scroll ***/
    const page = document.querySelector(".about");

    page.style.height = "document.body.offsetHeight";
    page.style.overflow = "hidden";

    setTimeout(() => {
      page.style.overflow = "inherit";
    }, 1000);

    /*** Create a min-height of 100vh ***/
    if (window.innerWidth < 1000) {
      document.querySelector(
        ".about__container"
      ).style.minHeight = `calc(100vh - ${
        document.querySelector("header").offsetHeight
      }px`;
    }
  }, []);

  const variants = {
    initial: {
      x: 100,
      opacity: 0,
    },
    final: {
      transition: { duration: 0.7 },
      x: 0,
      opacity: 1,
    },
  };

  return (
    <main className="about">
      <Header />
      <div className="about__container">
        <motion.div
          className="about__container--text"
          initial="initial"
          animate="final"
          variants={variants}
        >
          <p>
            <i className="fa-solid fa-hammer"></i> Je suis un développeur web
            passionné par le bricolage et les technologies. C'est pour moi une
            source d'inspiration constante dans ma vie personnelle et
            professionnelle. C'est pourquoi j'ai choisi d'intégrer cette passion
            à mon portfolio.
          </p>
          <br />

          <p>
            <i className="fa-sharp fa-solid fa-graduation-cap"></i> Mon parcours
            de développeur débute en juillet 2022, lorsque j'ai commencé à me
            former seul au développement front-end. J'ai rapidement acquis une
            expertise en React et en JavaScript. Je suis également très à l'aise
            avec Redux.js, Next.js.
          </p>
          <br />

          <p>
            <i className="fa-solid fa-laptop-code"></i> Ma motivation pour le
            développement vient de ma passion pour la création de logiciels qui
            résolvent des problèmes et améliorent la vie des utilisateurs. Je
            suis convaincu que, grâce à mon savoir-faire technique et à ma
            capacité d'adaptation rapide, je peux continuer à grandir et à
            apprendre dans ce domaine passionnant.
          </p>
          <br />

          <p>
            <i class="fa-solid fa-file-arrow-up"></i>{" "}
            <a href="./assets/RudyDupuis-DeveloppeurJavascript.pdf" download>
              <strong>Télécharger mon CV</strong>
            </a>
          </p>
        </motion.div>
        <PhotoOfMe />
      </div>
      <SlideButtons right={"/projet-1"} left={"/"} />
    </main>
  );
};

export default About;
