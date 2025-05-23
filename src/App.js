import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SkillsPage from './components/SkillsPage';
import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';
import Background3D from './components/Background3D';

function App() {
  return (
    <Router>
      <Background3D>
        <HomePage />
        <AboutMePage />
        <SkillsPage />
        <ProjectsPage />
        <Footer />
      </Background3D>
    </Router>
  );
}

export default App;
