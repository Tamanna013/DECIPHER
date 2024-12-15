import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Styled Components for Footer
const FooterWrapper = styled.footer`
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#f8f8f8')};
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  padding: 20px 0;
  text-align: center;
  border-top: 2px solid ${(props) => (props.theme === 'dark' ? '#555' : '#ddd')};
  font-size: 0.9rem;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 1rem;
  transition: font-size 0.3s ease;
`;

const FooterLink = styled.a`
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${(props) => (props.theme === 'dark' ? '#ddd' : '#555')};
    transform: translateY(-2px);
  }
`;

const FooterText = styled.p`
  margin-top: 15px;
  font-size: 0.8rem;
  transition: font-size 0.3s ease;
`;

const FooterBottom = styled.div`
  font-size: 0.75rem;
  color: ${(props) => (props.theme === 'dark' ? '#bbb' : '#777')};
  padding-top: 10px;
  transition: color 0.3s ease;
`;

// Footer Component
const Footer = ({ theme }) => {
  const { t } = useTranslation();

  return (
    <FooterWrapper theme={theme}>
      {/* Footer Links */}
      <FooterLinks>
        <FooterLink href="#contact" theme={theme}>
          {t('footer.contact')}
        </FooterLink>
        <FooterLink href="#privacy" theme={theme}>
          {t('footer.privacy')}
        </FooterLink>
        <FooterLink href="#terms" theme={theme}>
          {t('footer.terms')}
        </FooterLink>
      </FooterLinks>

      {/* Copyright Text */}
      <FooterText>{t('footer.allRightsReserved')}</FooterText>

      {/* Footer Bottom */}
      <FooterBottom theme={theme}>
        &copy; 2024 {t('app.title')}. {t('footer.allRightsReserved')}
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
