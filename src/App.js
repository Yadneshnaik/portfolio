import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SkillsPage from './components/SkillsPage';
import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <Router>
      <div>
        <HomePage />
        <SkillsPage />
        <AboutMePage />
        <ProjectsPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
