import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <main>
          <Navbar />
          <div className="box-container">
            <Switch>
              <Route exact path="/"><Home x="5" /></Route>
              <Route exact path="/resume"><Resume /></Route>
              <Route exact path="/projects"><Projects /></Route>
            </Switch>
          </div>
          <Footer />
        </main>
      </Router>
    </>
  );
}
