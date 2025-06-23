// src/pages/Mission.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Mission = () => {
  const { t, i18n } = useTranslation();

  const cards = [
    {
      icon: '🤝',
      title: t('inclusiveEducationTitle'),
      desc: t('inclusiveEducationDesc'),
    },
    {
      icon: '🎓',
      title: t('teacherEmpowermentTitle'),
      desc: t('teacherEmpowermentDesc'),
    },
    {
      icon: '🧩',
      title: t('neurodiversityTitle'),
      desc: t('neurodiversityDesc'),
    },
    {
      icon: '📢',
      title: t('policyTitle'),
      desc: t('policyDesc'),
    },
  ];

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mission-wrapper">
        {/* Header */}
        <div
          className="mission-header"
          style={{
            backgroundImage: 'url(/images/mission-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '6rem 1.5rem',
            textAlign: 'center',
            borderRadius: '16px',
            color: '#fff',
          }}
        >
          <h1 className="section-heading" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
            {t('missionTitle')}
          </h1>
          <p className="section-sub" style={{ maxWidth: '720px', margin: '1rem auto', fontSize: '1.25rem' }}>
            {t('missionSub')}
          </p>
        </div>

        {/* Cards */}
        <div className="mission-grid">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              className="mission-card"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mission-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {item.icon}
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
              <p className="mission-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/join" className="btn" style={{ marginRight: '1rem' }}>
            {t('joinMovement')}
          </Link>
          <Link to="/books" className="btn">
            {t('exploreToolkit')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mission;
