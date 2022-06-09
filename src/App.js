// ==========================================
// COMPONENT: App
// ==========================================

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
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
        <Navbar />

        <div className="box-container">
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
