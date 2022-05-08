// ==========================================
// COMPONENT: Home page
// OVERVIEW:  Header, about, contact wrapper
// USAGE:     App
// ==========================================

import Header from './Header';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
}
