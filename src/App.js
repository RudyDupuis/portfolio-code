import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projet-1" element={<Project1 />}></Route>
        <Route path="/projet-2" element={<Project2 />}></Route>
        <Route path="/projet-3" element={<Project3 />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/infos" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
