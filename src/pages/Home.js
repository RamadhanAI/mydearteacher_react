import React, { useState, useEffect } from 'react';

const heroImages = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
  '/images/slide5.jpg',
  '/images/slide6.jpg'
];

const galleryImages = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg'
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    const handleScroll = () => setShowScroll(window.scrollY > 300);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '48vh', overflow: 'hidden' }}>
        <img
          src={heroImages[currentSlide]}
          alt={`hero ${currentSlide + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 1s ease-in-out'
          }}
        />
      </div>

      {/* Welcome Message */}
      <div style={{
        backgroundColor: '#FFF4EC',
        padding: '3rem 1.5rem',
        textAlign: 'center',
        borderTop: '8px solid #F4888C',
        borderBottom: '4px solid #F4888C'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#F4888C', marginBottom: '1rem' }}>
          Reimagining Education for Every Child
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#4b5563',
          lineHeight: '1.8'
        }}>
          Because no one is broken. <br />
          Join us in building classrooms that see every child — not as a problem to fix,
          but as a story to understand.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>📸 Voices & Moments from the Movement</h2>
        <div className="gallery-grid">
          {galleryImages.map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery ${idx + 1}`} />
          ))}
        </div>
      </div>

      {/* YouTube Section */}
      <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ color: '#F4888C' }}>🎥 Watch Our Videos</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem', color: '#4b5563' }}>
          Explore our message through powerful visual stories and educator insights.
        </p>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          maxWidth: '100%'
        }}>
          <iframe
            title="MyDearTeacher on YouTube"
            src="https://www.youtube.com/embed?listType=user_uploads&list=mydearteachermovement"
            frameBorder="0"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '16px'
            }}
          ></iframe>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </>
  );
};

export default Home;
