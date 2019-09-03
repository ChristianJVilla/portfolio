import React from 'react';
import 'react-typist/dist/Typist.css';
import NavBar from './Components/NavBar/NavBar';
import Typewriter from './Components/Typewriter/Typewriter';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <Typewriter />
    <About />
    <Projects />
    <Contact />
    </>
  );
}

export default App;
