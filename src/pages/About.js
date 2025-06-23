// src/pages/About.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  /* card helper */
  const Card = ({ children }) => (
    <div className="about-card">
      {children}
    </div>
  );

  return (
    <div
      className={`container ${isRTL ? 'arabic-font' : ''}`}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <h1 className="storybook-heading about-title">{t('aboutTitle')}</h1>

      <Card>
        <p><strong>{t('aboutFounder')}</strong></p>
        <p>{t('aboutIntro')}</p>
      </Card>

      <Card>
        <h2>{t('aboutOriginTitle')}</h2>
        <p>{t('aboutGrowth')}</p>
      </Card>

      <Card>
        <h2>{t('aboutMissionTitle')}</h2>
        <p>{t('aboutMission')}</p>
      </Card>

      <Card>
        <h2>{t('aboutVisionTitle')}</h2>
        <p>{t('aboutVision')}</p>
      </Card>

      <Card>
        <h2>{t('aboutInspirationTitle')}</h2>
        <p>{t('aboutInspiration')}</p>
      </Card>

      <Card>
        <h2>{t('aboutSDGTitle')}</h2>
        <ul>
          <li>{t('sdg4')}</li>
          <li>{t('sdg10')}</li>
          <li>{t('sdg3')}</li>
          <li>{t('sdg17')}</li>
        </ul>
      </Card>

      <Card>
        <h2>{t('aboutWorkTitle')}</h2>
        <ul>
          <li>{t('aboutBooks')}</li>
          <li>{t('aboutTraining')}</li>
          <li>{t('aboutCampaigns')}</li>
          <li>{t('aboutPartnerships')}</li>
          <li>{t('aboutEngagement')}</li>
        </ul>
      </Card>

      <Card>
        <h2>{t('aboutPartnersTitle')}</h2>
        <p>{t('aboutPartners')}</p>
      </Card>

      <Card>
        <h2>{t('aboutJoinTitle')}</h2>
        <ul>
          <li>✅ {t('aboutOffer1')}</li>
          <li>✅ {t('aboutOffer2')}</li>
          <li>✅ {t('aboutOffer3')}</li>
          <li>✅ {t('aboutOffer4')}</li>
        </ul>
      </Card>
    </div>
  );
};

export default About;
