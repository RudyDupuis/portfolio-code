import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projet1 from "./pages/Project1";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projet-1" element={<Projet1 />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/infos" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
