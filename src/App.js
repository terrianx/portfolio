// ==========================================
// COMPONENT: App
// ==========================================

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SkipToMain from './components/accessibility/skipToMain';
import SINavbar from './components/nav/SINavbar';
import Home from './components/home/HomePage';
import Resume from './components/resume/ResumePage';
import Projects from './components/project/ProjectsPage';
import Gallery from './components/gallery/GalleryPage';
import Footer from './components/footer/Footer';

import './App.css';

export default function App() {
  return (
    <Router>
      <main>
        <header>
          <SkipToMain />
        </header>
        {/* SI navbar */}
        <SINavbar />

        <div className="box-container" id="main-content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/resume"><Resume /></Route>
            <Route exact path="/projects"><Projects /></Route>
            <Route exact path="/gallery"><Gallery /></Route>
          </Switch>
        </div>

        <Footer />
      </main>
    </Router>
  );
}
