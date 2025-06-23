import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    const honeypot = e.target.elements._gotcha?.value;
    if (honeypot) {
      e.preventDefault(); // bot trap
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1 className="storybook-heading">{t('contactTitle')}</h1>
      <p style={{ maxWidth: '650px' }}>{t('contactIntro')}</p>

      {submitted && (
        <div className="success-message">
          {t('contactSuccess')}
        </div>
      )}

      <form
        action="https://formspree.io/f/xnnvbwwd"
        method="POST"
        onSubmit={handleSubmit}
        className="styled-form"
      >
        <input type="text" name="_gotcha" style={{ display: 'none' }} />

        <div className="form-floating">
          <input type="text" name="name" required placeholder={t('contactName')} />
          <label>{t('contactName')}</label>
        </div>

        <div className="form-floating">
          <input type="email" name="email" required placeholder={t('contactEmail')} />
          <label>{t('contactEmail')}</label>
        </div>

        <div className="form-floating">
          <textarea name="message" rows="5" required placeholder={t('contactMessage')} />
          <label>{t('contactMessage')}</label>
        </div>

        <button type="submit" className="btn" style={{ marginTop: '1.5rem' }}>
          {t('contactBtn')}
        </button>
      </form>

      <div className="card" style={{ marginTop: '3rem', maxWidth: '650px', margin: 'auto' }}>
        <p><strong>{t('contactDetailsEmail')}</strong> <a href="mailto:mydearteacherletter@gmail.com">mydearteacherletter@gmail.com</a></p>
        <p><strong>{t('contactDetailsWebsite')}</strong> <a href="https://www.mydearteachermovement.org" target="_blank" rel="noreferrer">mydearteachermovement.org</a></p>
      </div>
    </div>
  );
};

export default Contact;
