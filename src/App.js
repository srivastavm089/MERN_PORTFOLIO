import React from "react";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
     <Header/>
      {" "}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/account" element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
