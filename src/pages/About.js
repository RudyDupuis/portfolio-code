import React from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import PhotoOfMe from "../components/PhotoOfMe";

const About = () => {
  return (
    <div className="about">
      <Header />
      <PhotoOfMe />
      <SlideButtons right={"/projet-1"} left={"/"} />
      <p className="about__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, dolor
        mollitia repellat quidem neque illum blanditiis voluptate vitae quis est
        tempora aut iste corrupti id accusantium voluptatem nam cumque vero
        asperiores exercitationem repellendus alias ea. Explicabo suscipit quasi
        saepe dicta facilis temporibus iste alias. Sed accusamus dolores officia
        totam est laboriosam, expedita voluptates. Vitae laborum consequuntur
        eligendi error, itaque sapiente unde nemo inventore magni vero doloribus
        quidem aperiam voluptatem perferendis, quibusdam delectus eaque, maiores
        et ratione minima a similique odio?
      </p>
    </div>
  );
};

export default About;
