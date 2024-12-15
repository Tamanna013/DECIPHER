import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { ThemeProvider } from 'styled-components';
import './Header.css';

// Header Styling using styled-components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#f2f2f2')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => (props.theme === 'dark' ? '#555' : '#ddd')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.theme === 'dark' ? '#444' : '#ccc')};
  }
`;

const LanguageSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
  transition: font-size 0.3s ease;
`;

const ThemeSwitchButton = styled(Button)`
  background-color: ${(props) => (props.theme === 'dark' ? '#444' : '#ddd')};
`;

// Header Component
const Header = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light'); // Light theme by default
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [menuActive, setMenuActive] = useState(false);

  // Toggle theme between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-theme');
  };

  // Increase and decrease font size
  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize - 2);

  // Change language based on selection
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // Toggle the hamburger menu for mobile view
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <HeaderWrapper theme={theme}>
        {/* Logo and Title */}
        <div>
          <Title style={{ fontSize: `${fontSize}px` }}>{t('app.title')}</Title>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links (Mobile Menu) */}
        <nav className={`nav ${menuActive ? 'active' : ''}`}>
          <ul>
            <li>
              <button onClick={() => i18n.changeLanguage('en')}>English</button>
            </li>
            <li>
              <button onClick={() => i18n.changeLanguage('es')}>Español</button>
            </li>
            <li>
              <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
            </li>
          </ul>
        </nav>

        {/* Font Size Adjustments */}
        <div>
          <Button theme={theme} onClick={increaseFontSize}>
            {t('buttons.increaseFontSize')}
          </Button>
          <Button theme={theme} onClick={decreaseFontSize}>
            {t('buttons.decreaseFontSize')}
          </Button>

          {/* Language Selector */}
          <LanguageSelect onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </LanguageSelect>
        </div>

        {/* Theme Toggle */}
        <ThemeSwitchButton theme={theme} onClick={toggleTheme}>
          {theme === 'light' ? t('buttons.darkMode') : t('buttons.lightMode')}
        </ThemeSwitchButton>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
