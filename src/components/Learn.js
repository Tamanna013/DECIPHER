import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Styled Components
const LearnWrapper = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? '#1e1e1e' : '#fff')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  padding: 50px 20px;
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  transition: font-size 0.3s ease;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-top: 30px;
  text-align: center;
  transition: font-size 0.3s ease;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#f9f9f9')};
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${(props) => (props.theme === 'dark' ? '0 4px 8px rgba(255, 255, 255, 0.1)' : '0 4px 8px rgba(0, 0, 0, 0.1)')};
  flex-basis: 30%;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.theme === 'dark' ? '0 6px 12px rgba(255, 255, 255, 0.2)' : '0 6px 12px rgba(0, 0, 0, 0.2)'};
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  transition: font-size 0.3s ease;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  transition: font-size 0.3s ease;
`;

const Button = styled.button`
  background-color: ${(props) => (props.theme === 'dark' ? '#6200ea' : '#03a9f4')};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.theme === 'dark' ? '#3700b3' : '#0288d1')};
    transform: translateY(-2px);
  }
`;

const Learn = ({ theme }) => {
  const { t } = useTranslation();
  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (action) => {
    if (action === 'increase') {
      setFontSize(fontSize + 2);
    } else if (action === 'decrease') {
      setFontSize(fontSize - 2);
    }
  };

  return (
    <LearnWrapper theme={theme}>
      <Title style={{ fontSize: `${fontSize + 10}px` }}>{t('learn.title')}</Title>

      <SectionTitle style={{ fontSize: `${fontSize + 8}px` }}>
        {t('learn.section1.title')}
      </SectionTitle>
      <ContentContainer>
        <Card theme={theme}>
          <CardTitle style={{ fontSize: `${fontSize + 2}px` }}>
            {t('learn.section1.card1.title')}
          </CardTitle>
          <CardDescription style={{ fontSize: `${fontSize}px` }}>
            {t('learn.section1.card1.description')}
          </CardDescription>
        </Card>

        <Card theme={theme}>
          <CardTitle style={{ fontSize: `${fontSize + 2}px` }}>
            {t('learn.section1.card2.title')}
          </CardTitle>
          <CardDescription style={{ fontSize: `${fontSize}px` }}>
            {t('learn.section1.card2.description')}
          </CardDescription>
        </Card>

        <Card theme={theme}>
          <CardTitle style={{ fontSize: `${fontSize + 2}px` }}>
            {t('learn.section1.card3.title')}
          </CardTitle>
          <CardDescription style={{ fontSize: `${fontSize}px` }}>
            {t('learn.section1.card3.description')}
          </CardDescription>
        </Card>
      </ContentContainer>

      <SectionTitle style={{ fontSize: `${fontSize + 8}px` }}>
        {t('learn.section2.title')}
      </SectionTitle>
      <ContentContainer>
        <Card theme={theme}>
          <CardTitle style={{ fontSize: `${fontSize + 2}px` }}>
            {t('learn.section2.card1.title')}
          </CardTitle>
          <CardDescription style={{ fontSize: `${fontSize}px` }}>
            {t('learn.section2.card1.description')}
          </CardDescription>
        </Card>

        <Card theme={theme}>
          <CardTitle style={{ fontSize: `${fontSize + 2}px` }}>
            {t('learn.section2.card2.title')}
          </CardTitle>
          <CardDescription style={{ fontSize: `${fontSize}px` }}>
            {t('learn.section2.card2.description')}
          </CardDescription>
        </Card>

        <Card theme={theme}>
          <CardTitle style={{ fontSize: `${fontSize + 2}px` }}>
            {t('learn.section2.card3.title')}
          </CardTitle>
          <CardDescription style={{ fontSize: `${fontSize}px` }}>
            {t('learn.section2.card3.description')}
          </CardDescription>
        </Card>
      </ContentContainer>

      <div style={{ textAlign: 'center' }}>
        <Button theme={theme} onClick={() => handleFontSizeChange('increase')}>
          {t('buttons.increaseFontSize')}
        </Button>
        <Button theme={theme} onClick={() => handleFontSizeChange('decrease')}>
          {t('buttons.decreaseFontSize')}
        </Button>
      </div>
    </LearnWrapper>
  );
};

export default Learn;
