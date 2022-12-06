// ==========================================
// COMPONENT: Home page
// OVERVIEW:  Splash, about, contact wrapper
// USAGE:     App
// ==========================================

import Splash from './Splash';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="home">
      <Splash />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
