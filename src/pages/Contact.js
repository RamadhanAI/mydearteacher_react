import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    const honeypot = e.target.elements._gotcha?.value;
    if (honeypot) {
      e.preventDefault(); // Bot detected
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1 className="storybook-heading">Contact Us</h1>
      <p style={{ maxWidth: '650px' }}>
        We’d love to hear from you. Whether it’s a question, invitation, or partnership request —
        reach out and let’s build something beautiful together.
      </p>

      {submitted && (
        <div style={{
          backgroundColor: '#35DAAD',
          color: 'white',
          padding: '1rem',
          textAlign: 'center',
          borderRadius: '8px',
          marginTop: '1rem',
          fontWeight: '600'
        }}>
          💌 Your message has been sent! Thank you.
        </div>
      )}

      <form
        action="https://formspree.io/f/xnnvbwwd"
        method="POST"
        onSubmit={handleSubmit}
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          marginTop: '2rem',
          maxWidth: '650px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {/* Honeypot field */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />

        <div className="form-floating">
          <input type="text" name="name" required placeholder="Your Name" />
          <label>Your Name</label>
        </div>

        <div className="form-floating">
          <input type="email" name="email" required placeholder="Email" />
          <label>Email</label>
        </div>

        <div className="form-floating">
          <textarea name="message" rows="5" required placeholder="Message" />
          <label>Message</label>
        </div>

        <button
          type="submit"
          className="btn"
          style={{
            marginTop: '1.5rem',
            backgroundColor: '#f78ca2',
            border: 'none',
            fontWeight: '600'
          }}
        >
          Send Message
        </button>
      </form>

      <div className="card" style={{ marginTop: '3rem', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
        <p><strong>Email:</strong> <a href="mailto:mydearteacherletter@gmail.com">mydearteacherletter@gmail.com</a></p>
        <p><strong>Website:</strong> <a href="https://www.mydearteachermovement.org" target="_blank" rel="noreferrer">mydearteachermovement.org</a></p>
      </div>
    </div>
  );
};

export default Contact;
