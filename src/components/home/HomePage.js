// ==========================================
// COMPONENT: Home page
// OVERVIEW:  Header, about, contact wrapper
// USAGE:     App
// ==========================================

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
