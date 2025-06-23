import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const JoinUs = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    const honeypot = e.target.elements._gotcha?.value;
    if (honeypot) {
      e.preventDefault(); // spam detected
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1 className="storybook-heading">{t('joinUsTitle')}</h1>
      <p>{t('joinUsIntro')}</p>

      {submitted && (
        <div className="success-message">
          {t('joinUsSuccess')}
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
          <input type="text" name="name" required placeholder={t('joinUsName')} />
          <label>{t('joinUsName')}</label>
        </div>

        <div className="form-floating">
          <input type="email" name="email" required placeholder={t('joinUsEmail')} />
          <label>{t('joinUsEmail')}</label>
        </div>

        <div className="form-floating">
          <select name="role" required defaultValue="">
            <option value="" disabled>{t('joinUsSelectRole')}</option>
            <option>{t('joinUsParent')}</option>
            <option>{t('joinUsEducator')}</option>
            <option>{t('joinUsNGO')}</option>
            <option>{t('joinUsOther')}</option>
          </select>
          <label>{t('joinUsRole')}</label>
        </div>

        <button type="submit" className="btn" style={{ marginTop: '1.5rem' }}>
          {t('joinUsBtn')}
        </button>
      </form>

      <div className="card" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3>{t('joinUsReady')}</h3>
        <p>{t('joinUsEmailText')} <a href="mailto:mydearteacherletter@gmail.com">mydearteacherletter@gmail.com</a></p>
        <p>{t('joinUsFollow')}
          <a href="https://facebook.com/share/199AeuoYb9/" target="_blank" rel="noreferrer"> Facebook</a> | 
          <a href="https://instagram.com/mydearteachermovement" target="_blank" rel="noreferrer"> Instagram</a> | 
          <a href="https://tiktok.com/@mydearteacher42" target="_blank" rel="noreferrer"> TikTok</a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
