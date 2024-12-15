import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { ThemeProvider } from 'styled-components';
import './Home.css';

// Styled Components for the Page
const HomeWrapper = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: ${(props) => (props.theme === 'dark' ? '#4B0082' : '#EEEAF3')};
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#333')};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => (props.theme === 'dark' ? '#6A0DAD' : '#DABFFF')};
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#333')};
  transition: background-color 0.3s ease;
`;

const LogoSpace = styled.div`
  width: 150px;
  height: 50px;
  background-color: ${(props) => (props.theme === 'dark' ? '#6A0DAD' : '#FFF')};
  border: 2px dashed ${(props) => (props.theme === 'dark' ? '#FFF' : '#6A0DAD')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#6A0DAD')};
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#6A0DAD')};
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.theme === 'dark' ? '#DABFFF' : '#4B0082')};
  }
`;

const HeroSection = styled.section`
  background: url(${(props) => props.bgImage}) no-repeat center center/cover;
  padding: 60px 20px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#6A0DAD')};
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#FFF')};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.theme === 'dark' ? '#444' : '#4B0082')};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const FeatureCard = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? '#6A0DAD' : '#FFF')};
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#6A0DAD')};
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.theme === 'dark' ? '#4B0082' : '#DABFFF')};
  }
`;

const App = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <HomeWrapper theme={theme}>
        {/* Header Section */}
        <Header theme={theme}>
        <LogoSpace theme={theme}>
          <img src="./assets/DECIPHER.png" alt="Decipher Logo" />
        </LogoSpace>
          <Nav>
            <NavItem href="/">{t('navbar.home')}</NavItem>
            <NavItem href="/learn">{t('navbar.learn')}</NavItem>
            <NavItem href="/simulate">{t('navbar.simulate')}</NavItem>
            <NavItem href="/quiz">{t('navbar.quiz')}</NavItem>
          </Nav>
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
          <Button theme={theme} onClick={toggleTheme}>
            {theme === 'light' ? t('buttons.darkMode') : t('buttons.lightMode')}
          </Button>
        </Header>

        {/* Hero Section */}
        <HeroSection
          theme={theme}
          bgImage="https://via.placeholder.com/1500x500" // Replace with your image URL
        >
          <Title>{t('home.heroTitle')}</Title>
          <Description>{t('home.heroDescription')}</Description>
        </HeroSection>

        {/* Features Section */}
        <FeaturesGrid>
          <FeatureCard theme={theme}>
            <h3>{t('home.feature1.title')}</h3>
            <p>{t('home.feature1.description')}</p>
          </FeatureCard>
          <FeatureCard theme={theme}>
            <h3>{t('home.feature2.title')}</h3>
            <p>{t('home.feature2.description')}</p>
          </FeatureCard>
          <FeatureCard theme={theme}>
            <h3>{t('home.feature3.title')}</h3>
            <p>{t('home.feature3.description')}</p>
          </FeatureCard>
          {/* Leave space for additional features */}
        </FeaturesGrid>
      </HomeWrapper>
    </ThemeProvider>
  );
};

export default App;
