

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PixelDivider from './components/PixelDivider';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <PixelDivider />
      <Skills />
      <PixelDivider />
      <About />
      <PixelDivider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;