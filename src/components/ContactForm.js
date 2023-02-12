import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_nnnv7wf",
        "template_40bkmdn",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (res) => {
          form.current.reset();
          formMess.innerHTML = "<p>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 5000);
        },
        (err) => {
          formMess.innerHTML =
            "<p>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 5000);
        }
      );
  };

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
    <motion.section
      className="contact-form"
      initial="initial"
      animate="final"
      variants={variants}
    >
      <h1>Contactez-moi</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          id="name"
          placeholder="Nom"
        />
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
          placeholder="Email"
        />
        <textarea name="message" id="mess" rows="5" placeholder="Message" />
        <input type="submit" value="Envoyer" className="button" />
      </form>
      <div className="formMessage"></div>
    </motion.section>
  );
};

export default ContactForm;
