import React, { useState } from 'react';

const JoinUs = () => {
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
      <h1 className="storybook-heading">Join the #MyDearTeacher Movement</h1>
      <p>
        Whether you're a teacher, parent, policymaker, or passionate advocate — there's a place for you in this movement. Together, we’re building a world where every child feels seen, supported, and celebrated.
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
          ✅ Thank you for joining the movement!
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
        <input type="text" name="_gotcha" style={{ display: 'none' }} />

        <div className="form-floating">
          <input type="text" name="name" required placeholder="Your Name" />
          <label>Your Name</label>
        </div>

        <div className="form-floating">
          <input type="email" name="email" required placeholder="Your Email" />
          <label>Your Email</label>
        </div>

        <div className="form-floating">
          <select name="role" required defaultValue="" style={{ paddingTop: '1.2rem' }}>
            <option value="" disabled>Select your role</option>
            <option>Parent</option>
            <option>Educator</option>
            <option>NGO / Partner</option>
            <option>Other</option>
          </select>
          <label>Your Role</label>
        </div>

        <button type="submit" className="btn" style={{ marginTop: '1.5rem' }}>
          Join Now
        </button>
      </form>

      <div className="card" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3>✨ Ready to get started?</h3>
        <p>Email us at <a href="mailto:mydearteacherletter@gmail.com">mydearteacherletter@gmail.com</a></p>
        <p>Follow us: 
          <a href="https://facebook.com/share/199AeuoYb9/" target="_blank" rel="noreferrer"> Facebook</a> | 
          <a href="https://instagram.com/mydearteachermovement" target="_blank" rel="noreferrer"> Instagram</a> | 
          <a href="https://tiktok.com/@mydearteacher42" target="_blank" rel="noreferrer"> TikTok</a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
