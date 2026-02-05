import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
