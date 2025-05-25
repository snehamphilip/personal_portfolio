import React from 'react';

const Footer = () => (
  <footer
    className="text-white text-center py-4"
    style={{
      background: 'linear-gradient(to right, #1e3a8a, #2563eb)', // Deep blue gradient
      fontWeight: 500,
      fontSize: '1rem',
    }}
  >
    <p className="mb-1">
      &copy; {new Date().getFullYear()} Sneha M Philip | Made with{' '}
      <span style={{ color: '#f87171' }}>❤️</span> using React & Bootstrap
    </p>
    <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.85 }}>
      
    </p>
  </footer>
);

export default Footer;
