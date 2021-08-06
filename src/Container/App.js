import React from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Navigation from '../Components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
