import React from "react";
import SlideButtons from "../components/SlideButtons";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    final: {
      transition: { duration: 0.7 },
      y: 0,
      opacity: 1,
    },
  };

  return (
    <main className="contact">
      <Header />
      <ContactForm />
      <div className="contact__infos">
        <div className="contact__infos--container">
          <div>
            <h3>
              <i className="fa-solid fa-phone"></i> Mon téléphone :
            </h3>
            <CopyToClipboard text="0787644349">
              <p className="contact__infos--phone">
                0787644349 <i className="fa-solid fa-copy"></i>
              </p>
            </CopyToClipboard>
          </div>
          <div>
            <h3>
              <i className="fa-solid fa-envelope"></i> Mon mail :
            </h3>
            <CopyToClipboard text="dupuisrudypro@gmail.com">
              <p className="contact__infos--mail">
                dupuisrudypro@gmail.com <i className="fa-solid fa-copy"></i>
              </p>
            </CopyToClipboard>
          </div>
        </div>
        <motion.footer initial="initial" animate="final" variants={variants}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/rudy-dupuis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RudyDupuis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
          <p>
            Rudy Dupuis <i className="fa-regular fa-copyright"></i>{" "}
            {new Date().getFullYear()}{" "}
          </p>
        </motion.footer>
      </div>
      <SlideButtons left={"/projet-4"} />
    </main>
  );
};

export default Contact;
