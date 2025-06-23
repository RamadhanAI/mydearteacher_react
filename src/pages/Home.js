import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const heroImages = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
  '/images/slide5.jpg',
  '/images/slide6.jpg',
];

const galleryImages = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
];

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  /* dynamic taglines based on current language */
  const taglines = [
    t('homeTagline1'),
    t('homeTagline2'),
    t('homeTagline3'),
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  /* slideshow + tagline rotator */
  useEffect(() => {
    const slideInterval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroImages.length),
      4000
    );

    const tagInterval = setInterval(
      () => setCurrentTagline((prev) => (prev + 1) % taglines.length),
      3000
    );

    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);

    return () => {
      clearInterval(slideInterval);
      clearInterval(tagInterval);
      window.removeEventListener('scroll', onScroll);
    };
  }, [taglines.length]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div
      className={isRTL ? 'arabic-font' : ''}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '48vh', overflow: 'hidden' }}>
        <img
          src={heroImages[currentSlide]}
          alt={`Hero ${currentSlide + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 1s ease-in-out',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(255,244,236,0.9)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          <h2
            className="storybook-heading"
            style={{ color: '#F4888C', marginBottom: '0.5rem' }}
          >
            {taglines[currentTagline]}
          </h2>

          <div style={{ marginTop: '0.5rem' }}>
            <a href="/books" className="btn" style={{ marginInlineEnd: '1rem' }}>
              {t('homeExploreBtn')}
            </a>
            <a href="/about" className="btn" style={{ marginInlineEnd: '1rem' }}>
              {t('homeAuthorBtn')}
            </a>
            <a
  href="https://vt.tiktok.com/ZSkcaRELL/"
  className="btn"
  style={{ backgroundColor: '#ccc' }}
  target="_blank"
  rel="noreferrer"
>
  {t('homeVideoBtn')}
</a>

          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div
        style={{
          backgroundColor: '#FFF4EC',
          padding: '3rem 1.5rem',
          textAlign: 'center',
          borderTop: '8px solid #F4888C',
          borderBottom: '4px solid #F4888C',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#F4888C', marginBottom: '1rem' }}>
          {t('homeWelcomeTitle')}
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#4b5563',
            lineHeight: '1.8',
          }}
        >
          {t('homeWelcomeText')}
        </p>
      </div>

      {/* Gallery */}
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>{t('homeGalleryTitle')}</h2>
        <div className="gallery-horizontal">
          {galleryImages.map((src, idx) => (
            <img key={idx} src={src} alt={`Moment ${idx + 1}`} className="gallery-img" />
          ))}
        </div>
      </div>

      {/* Tile Image */}
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <img
          src="/images/tile.jpg"
          alt={t('homeTileAlt')} /* 🆕 */
          style={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            borderRadius: '20px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          }}
        />
      </div>

      {/* Explore Our Message Video Section */}
<div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
  <h2 style={{ color: '#F4888C' }}>
    {t('homeVideoStoriesTitle')}
  </h2>
  <p style={{ maxWidth: '700px', margin: '0 auto 2rem', color: '#4b5563' }}>
    {t('homeWatchDesc')}
  </p>

  <div
    style={{
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
      maxWidth: '100%',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }}
  >
    <iframe
      title="Explore Our Message"
      src="https://www.youtube.com/embed/gjqH5s3KkM4"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '16px',
      }}
    ></iframe>
  </div>
</div>


      {/* WhatsApp Icon */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
        <a
          href="https://wa.me/971505816347"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp"
        >
          <img
            src="/images/whatsapp-icon.png"
            alt="WhatsApp"
            style={{ width: '60px', height: '60px', transition: 'transform 0.3s' }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </a>
      </div>

      {/* Scroll-to-Top */}
      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
