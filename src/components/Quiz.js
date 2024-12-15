import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { ThemeProvider } from 'styled-components';
import './Quiz.css';  // Add custom CSS

// Styled Components for Quiz Page
const QuizWrapper = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#f2f2f2')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  padding: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: ${(props) => props.fontSize}px;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  transition: font-size 0.3s ease;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: ${(props) => (props.theme === 'dark' ? '#555' : '#ddd')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.theme === 'dark' ? '#444' : '#ccc')};
  }
`;

const QuizSection = styled.section`
  margin-bottom: 40px;
  text-align: center;
`;

const LanguageSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  margin-top: 20px;
`;

const QuestionList = styled.div`
  margin-bottom: 30px;
`;

const QuestionItem = styled.div`
  margin: 15px 0;
`;

const Quiz = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-theme');
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <QuizWrapper theme={theme} fontSize={fontSize}>
        {/* Title and Description */}
        <QuizSection>
          <Title>{t('quiz.title')}</Title>
          <Button theme={theme} onClick={toggleTheme}>
            {theme === 'light' ? t('buttons.darkMode') : t('buttons.lightMode')}
          </Button>
          <LanguageSelect onChange={handleLanguageChange} value={i18n.language}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </LanguageSelect>
        </QuizSection>

        {/* Quiz Questions */}
        <QuizSection>
          <h2>{t('quiz.formTitle')}</h2>
          <QuestionList>
            <QuestionItem>
              <p>{t('quiz.q1.question')}</p>
              {/* Multiple choice options for q1 */}
              <Button theme={theme}>{t('buttons.submit')}</Button>
            </QuestionItem>
            <QuestionItem>
              <p>{t('quiz.q2.question')}</p>
              {/* Multiple choice options for q2 */}
              <Button theme={theme}>{t('buttons.submit')}</Button>
            </QuestionItem>
            {/* Add more questions */}
          </QuestionList>
        </QuizSection>
      </QuizWrapper>
    </ThemeProvider>
  );
};

export default Quiz;
