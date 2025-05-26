import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => (
  <section
    id="hero"  // <-- Add this line here
    className="text-white py-5"
    style={{
      background: 'linear-gradient(135deg, #1e3a8a, #0f766e)', // Indigo to Teal
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Floating glow effect */}
    <div
      style={{
        position: 'absolute',
        width: '200%',
        height: '200%',
        top: '-50%',
        left: '-50%',
        background:
          'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 60%)',
        animation: 'rotateBg 20s linear infinite',
        zIndex: 0,
      }}
    />

    <style>{`
      @keyframes rotateBg {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .hover-zoom:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 28px rgba(255, 255, 255, 0.2);
        transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
      }

      .icon-hover:hover {
        color: #facc15 !important;
        transform: scale(1.2);
        transition: all 0.3s;
      }

      .text-shadow {
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
    `}</style>

    <div className="container position-relative" style={{ zIndex: 1 }}>
      <div className="row align-items-center">
        {/* LEFT: Profile Image */}
        <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
          <img
            src="/profile.jpg"
            alt="Sneha M Philip"
            loading="lazy"
            className="img-fluid hover-zoom"
            style={{
              maxHeight: '400px',
              width: '100%',
              objectFit: 'cover',
              borderRadius: '1.5rem',
              border: '4px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              transition: 'all 0.4s ease-in-out',
            }}
          />
        </div>

        {/* RIGHT: Content */}
        <div className="col-md-7">
          <h1 className="fw-bold display-4 text-shadow mb-3">Hi, I'm Sneha M Philip 👋</h1>
          <p className="lead text-shadow mb-4">
            <i className="bi bi-lightning-fill me-2"></i>
            A passionate Computer Science Engineering student with a love for creating elegant and functional tech solutions.
          </p>

          <div className="d-flex flex-wrap gap-3 mb-4">
            <a
              href="https://drive.google.com/file/d/13FC_JunrdngclY0T1xHerIeIw6YLCMUe/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg shadow-sm hover-zoom"
            >
              <i className="bi bi-download me-2"></i>Download CV
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=snehaamphilip@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg shadow-sm hover-zoom"
            >
              <i className="bi bi-envelope me-2"></i>Contact Me
            </a>
          </div>

          <div>
            <a
              href="https://github.com/snehamphilip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-3 me-4 icon-hover"
              aria-label="GitHub Profile"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/snehamphilip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-3 icon-hover"
              aria-label="LinkedIn Profile"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
