import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projectspage from './components/Projectspage';
import Education from './components/Education';
import Publications from './components/Publications';
function App() {

  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow


  const color = "teal";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Skills color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <Projectspage color={color} />
      <Education color={color} />
      <Publications color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
