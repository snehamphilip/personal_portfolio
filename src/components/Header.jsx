import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => (
  <header
    className="py-3 shadow-sm sticky-top"
    style={{
      background: "#1e3a8a",
      zIndex: 1000,
    }}
  >
    <div className="container d-flex justify-content-between align-items-center">
      <h5 className="text-white m-0 fw-bold">
        <i className="bi bi-person-circle me-2"></i>Sneha M Philip
      </h5>

      <nav className="d-none d-md-flex gap-4">
        <a href="#hero" className="text-white text-decoration-none">Home</a>
        <a href="#education" className="text-white text-decoration-none">Education</a>
        <a href="#experience" className="text-white text-decoration-none">Experience</a>
        <a href="#skills" className="text-white text-decoration-none">Skills</a>
        <a href="#projects" className="text-white text-decoration-none">Projects</a>
        <a href="#certificatesection" className="text-white text-decoration-none">Certificates</a>
      </nav>
    </div>
  </header>
);

export default Header;
