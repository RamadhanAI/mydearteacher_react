// src/pages/Blog.js
import React from 'react';

const blogPosts = [
  {
    title: 'How One Teacher Changed the Life of a 2e Learner',
    image: '/images/blog1.jpg',
    excerpt: 'Discover how understanding neurodiversity transformed a frustrated student into a confident innovator.',
    link: '#'
  },
  {
    title: 'Creating Sensory-Friendly Classrooms',
    image: '/images/blog2.jpg',
    excerpt: 'Practical ways educators are adapting their spaces to support emotional and sensory regulation.',
    link: '#'
  },
  {
    title: 'Celebrating Neurodiverse Talents Through Art & Story',
    image: '/images/blog3.jpg',
    excerpt: 'Voices from the movement: stories, drawings, and poems from students who just needed to be seen.',
    link: '#'
  }
];

const Blog = () => (
  <div className="container">
    <h1>📰 From the Blog</h1>
    <p style={{ color: '#4b5563', maxWidth: '720px' }}>
      Insights, experiences, and powerful stories that shape the heart of inclusive education.  
      Learn from educators, students, parents, and advocates from around the world.
    </p>

    {/* Blog Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem'
    }}>
      {blogPosts.map((post, idx) => (
        <div key={idx} className="card">
          <img src={post.image} alt={post.title} style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '12px'
          }} />
          <h2 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>{post.title}</h2>
          <p style={{ color: '#4b5563' }}>{post.excerpt}</p>
          <a href={post.link} className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>Read More</a>
        </div>
      ))}
    </div>

    {/* Contribute CTA */}
    <div className="card" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h2>📬 Share Your Voice</h2>
      <p>
        Do you have a classroom story, parenting insight, or creative idea to share?
        We welcome articles, videos, and stories from the community.
      </p>
      <a href="mailto:mydearteacherletter@gmail.com" className="btn">Contribute a Story</a>
    </div>
  </div>
);

export default Blog;
