import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/SideNavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer"
import "../styles/style.css"

export default function Home() {
  return (
    <main id="Home" className="main">
      <img className="mepic" src="https://raw.githubusercontent.com/Jon-bon-Jono/Jon-bon-Jono.github.io/main/src/images/me.jpg" alt="Me" width="288" height="321"></img>
      <h1 className="name"><span>Jonathan Williams</span></h1>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}