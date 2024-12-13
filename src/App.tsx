import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import { Routes, Route } from "react-router-dom";
import './scss/App.scss'
import './scss/NavBar.scss'
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useTheme } from './contexts/ThemeContext';
import { useEffect } from 'react';
import clsx from 'clsx';

function App() {
  const { theme } = useTheme();

  // Setting the theme class on the body element
  useEffect(() => {
    document.body.className = clsx({
      "light-theme": theme === "light",
      "dark-theme": theme === "dark",
    });
  }, [theme]);


  return (
    <div
      className={clsx({
        "light-theme": theme === "light",
        "dark-theme": theme === "dark",
      })}
    >
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </ div>
  )
}

export default App
