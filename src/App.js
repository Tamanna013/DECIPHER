import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Learn from './components/Learn';
import Simulate from './components/Simulate';
import Quiz from './components/Quiz';
import './App.css'; // Global styles
import './i18n'; // Import i18n.js for translations

function App() {
  const { t, i18n } = useTranslation();
  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = useState('light');

  // Increase and decrease font size
  const increaseFontSize = () => setFontSize((prevSize) => prevSize + 2);
  const decreaseFontSize = () => setFontSize((prevSize) => prevSize - 2);

  // Toggle theme
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  // Change language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div className={`App ${theme}`} style={{ fontSize: `${fontSize}px` }}>
        {/* Accessibility Buttons */}
        <div className="accessibility-controls">
          <button onClick={increaseFontSize}>{t('buttons.increaseFontSize')}</button>
          <button onClick={decreaseFontSize}>{t('buttons.decreaseFontSize')}</button>
          <button onClick={toggleTheme}>
            {theme === 'light' ? t('buttons.darkMode') : t('buttons.lightMode')}
          </button>
          <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
          </div>
        </div>

        {/* App Structure */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/simulate" element={<Simulate />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
