import React, { useRef } from 'react';
import './style.css'
import Header from './Header';
import MainContent from './MainContent';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App(props) {
  
  const aboutRef = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const handleClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const projectClick = () => {
    projects.current.scrollIntoView({ behavior: 'smooth' });
  }
  const contactClick = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <Header handleClick={handleClick}
      projectClick={projectClick}
      contactClick={contactClick}
      />
      <MainContent />
      <About aboutRef={aboutRef} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer />
    </div>
  );
}

export default App;