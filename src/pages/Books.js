import React from 'react';
import { useTranslation } from 'react-i18next';

const Books = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const books = [
    {
      title: t('book1Title'),
      subtitle: t('book1Subtitle'),
      description: t('book1Desc'),
      image: '/images/book1.jpg',
      link: '#',
    },
    {
      title: t('book2Title'),
      subtitle: t('book2Subtitle'),
      description: t('book2Desc'),
      image: '/images/book2.jpg',
      link: '#',
    },
    {
      title: t('book3Title'),
      subtitle: t('book3Subtitle'),
      description: t('book3Desc'),
      image: '/images/book3.jpg',
      link: '#',
    },
    {
      title: t('book4Title'),
      subtitle: t('book4Subtitle'),
      description: t('book4Desc'),
      image: '/images/book4.jpg',
      link: '#',
    },
  ];

  return (
    <div className={`container ${isRTL ? 'arabic-font' : ''}`} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      <h1 className="storybook-heading">{t('booksTitle')}</h1>
      <p style={{ maxWidth: '720px', marginBottom: '2rem', color: '#4b5563' }}>
        {t('booksIntro')}
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {books.map((book, idx) => (
          <div key={idx} className="card" style={{ background: 'white' }}>
            <img
              src={book.image}
              alt={book.title}
              style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }}
            />
            <h2 style={{ color: '#F4888C', fontSize: '1.3rem' }}>{book.title}</h2>
            <p><strong>{book.subtitle}</strong></p>
            <p style={{ color: '#4b5563' }}>{book.description}</p>
            <a
              href={book.link}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{
                marginTop: '1rem',
                backgroundColor: '#3bc6c7',
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                padding: '0.6rem 1.2rem',
                display: 'inline-block',
                borderRadius: '8px',
              }}
            >
              {t('buyNow')}
            </a>
          </div>
        ))}
      </div>

      <div className="card" style={{ textAlign: 'center', marginTop: '3rem', background: 'white' }}>
        <p>📦 {t('booksContactText')}</p>
        <a
          href="mailto:mydearteacherletter@gmail.com"
          style={{ fontWeight: 'bold', color: '#3bc6c7', textDecoration: 'none' }}
        >
          {t('getInTouch')}
        </a>
      </div>
    </div>
  );
};

export default Books;
