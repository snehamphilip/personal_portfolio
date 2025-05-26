import React from "react";

const educations = [
  {
    degree: "B.Tech in Computer Science",
    institution: "APJ Abdul Kalam Technological University",
    year: "2022 - 2026",
    details: "CGPA: 8.29",
    color: "#4f46e5", // Indigo
    icon: "bi bi-mortarboard-fill",
  },
  {
    degree: "12th Grade",
    institution: "Kendriya Vidyalaya Port Trust",
    year: "2020 - 2022",
    details: "Percentage: 84%",
    color: "#10b981", // Emerald green
    icon: "bi bi-book-fill",
  },
  {
    degree: "10th Grade",
    institution: "St. Annes Public School",
    year: "2019 - 2020",
    details: "Percentage: 80%",
    color: "#f59e0b", // Amber yellow
    icon: "bi bi-pencil-fill",
  },
];

const Education = () => (
  <section
    id="education"
    className="py-5"
    style={{
      background: "linear-gradient(to right, #cfe8ff, #a9d6ff)", // darker blue gradient background
    }}
  >
    <div className="container">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#1e3a8a" }}>
        <i className="bi bi-mortarboard-fill me-2"></i>My Education
      </h2>
      <div className="row g-4 justify-content-center">
        {educations.map(({ degree, institution, year, details, color, icon }, i) => (
          <div key={i} className="col-md-4">
            <div
              className="p-4 rounded shadow-lg h-100 position-relative overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                borderTop: `5px solid ${color}`,
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* Icon Circle */}
              <div
                style={{
                  backgroundColor: color,
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f8f9fa",
                  fontSize: 24,
                  position: "absolute",
                  top: 20,
                  right: 20,
                  boxShadow: `0 0 10px ${color}`,
                }}
              >
                <i className={icon}></i>
              </div>

              <h4 className="fw-bold" style={{ color: color }}>
                {degree}
              </h4>
              <p className="text-secondary mb-1">{institution}</p>
              <small className="text-muted">{year}</small>
              <p className="mt-3" style={{ fontWeight: "500" }}>
                {details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
