import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SkillsPage from './components/SkillsPage';
import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';
import FreeTimePage from './components/FreeTimePage';

function App() {
  return (
    <Router>
      <div>
        <HomePage />
        <AboutMePage />
        <SkillsPage />
        <FreeTimePage />
        <ProjectsPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
