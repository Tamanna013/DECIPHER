import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { ThemeProvider } from 'styled-components';
import './Dashboard.css';

// Styled Components for Dashboard Page
const DashboardWrapper = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#f2f2f2')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  min-height: 100vh;
  padding: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const DashboardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  transition: font-size 0.3s ease;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.theme === 'dark' ? '#555' : '#ddd')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.theme === 'dark' ? '#444' : '#ccc')};
  }
`;

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? '#444' : '#fff')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${(props) => (props.theme === 'dark' ? '0 4px 8px rgba(255, 255, 255, 0.1)' : '0 4px 8px rgba(0, 0, 0, 0.1)')};
`;

const Dashboard = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('1rem');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => `${parseFloat(prevSize) + 0.1}rem`);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => `${parseFloat(prevSize) - 0.1}rem`);
  };

  return (
    <ThemeProvider theme={{ theme }}>
      <DashboardWrapper theme={theme} style={{ fontSize }}>
        <DashboardHeader>
          <Title>{t('dashboard.title')}</Title>
          <div>
            <Button theme={theme} onClick={toggleTheme}>
              {theme === 'dark' ? t('buttons.lightMode') : t('buttons.darkMode')}
            </Button>
            <Button theme={theme} onClick={increaseFontSize}>
              {t('buttons.increaseFontSize')}
            </Button>
            <Button theme={theme} onClick={decreaseFontSize}>
              {t('buttons.decreaseFontSize')}
            </Button>
          </div>
        </DashboardHeader>
        <DashboardContent>
          <Card theme={theme}>
            <h3>{t('dashboard.card1.title')}</h3>
            <p>{t('dashboard.card1.description')}</p>
          </Card>
          <Card theme={theme}>
            <h3>{t('dashboard.card2.title')}</h3>
            <p>{t('dashboard.card2.description')}</p>
          </Card>
          <Card theme={theme}>
            <h3>{t('dashboard.card3.title')}</h3>
            <p>{t('dashboard.card3.description')}</p>
          </Card>
        </DashboardContent>
      </DashboardWrapper>
    </ThemeProvider>
  );
};

export default Dashboard;
