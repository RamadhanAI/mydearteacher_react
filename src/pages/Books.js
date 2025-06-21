// src/pages/Books.js
import React from 'react';

const books = [
  {
    title: "Neurodiverse Classrooms",
    subtitle: "A Teacher’s Guide to SEN Support (Practical Strategies for Every Student)",
    description: "A go-to guide filled with practical tools and strategies for supporting neurodiverse learners. This book equips educators to confidently serve students with special educational needs in mainstream classrooms.",
    image: "/images/book1.jpg",
    link: "#"
  },
  {
    title: "Beyond Gifted",
    subtitle: "Supporting Talented and Twice-Exceptional Learners in Our Neurodiverse World",
    description: "This groundbreaking book bridges the gap between gifted education and neurodiversity. It empowers schools and families to recognize, support, and celebrate 2e learners—those who are both gifted and challenged.",
    image: "/images/book2.jpg",
    link: "#"
  },
  {
    title: "Dear Teacher, I Am Not Broken",
    subtitle: "Poetic insights that sparked a movement.",
    description: "A poetic, heart-opening narrative that gives voice to misunderstood learners. This book sparked the global #MyDearTeacher movement and continues to inspire inclusive education worldwide.",
    image: "/images/book3.jpg",
    link: "#"
  },
  {
    title: "#MyDearTeacher Toolkit",
    subtitle: "Advocacy & Resource Guide for Inclusive Classrooms",
    description: "A practical toolkit filled with checklists, templates, conversation starters, and inclusion frameworks for teachers, schools, and advocacy partners.",
    image: "/images/book4.jpg",
    link: "#"
  }
];

const Books = () => (
  <div className="container">
    <h1 className="storybook-heading">Our Books</h1>
    <p style={{ maxWidth: '720px', marginBottom: '2rem' }}>
      Explore the powerful resources, insights, and stories shaping the future of inclusive education through the #MyDearTeacher Movement.
    </p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    }}>
      {books.map((book, idx) => (
        <div key={idx} className="card" style={{ backgroundColor: '#FFF4EC', borderRadius: '16px', padding: '1.5rem' }}>
          <img src={book.image} alt={book.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} />
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
              borderRadius: '8px'
            }}
          >
            Buy Now
          </a>
        </div>
      ))}
    </div>

    <div className="card" style={{ textAlign: 'center', marginTop: '3rem' }}>
      <p>📦 Want to order or partner with us?</p>
      <a href="mailto:mydearteacherletter@gmail.com" style={{ fontWeight: 'bold', color: '#3bc6c7' }}>Get in Touch</a>
    </div>
  </div>
);

export default Books;
