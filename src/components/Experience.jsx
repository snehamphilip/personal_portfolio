import React from "react";

const experiences = [
  {
    role: "CS Society Treasurer",
    company: "IEEE Execom Member",
    duration: "2025 - 2026",
    description:
      "Managed treasury responsibilities for the IEEE CS Society, coordinated budgets and organized events.",
    color: "#2563eb", // Blue
    icon: "bi bi-award-fill",
    link: "https://drive.google.com/file/d/DRIVE_FILE_ID_IEEE_TREASURER/view?usp=sharing",
  },
  {
    role: "App Lead",
    company: "Mulearn Execom Member",
    duration: "2024 - 2025, 2025 - 2026",
    description:
      "Led app development initiatives, mentored peers, and collaborated on technical projects.",
    color: "#16a34a", // Green
    icon: "bi bi-gear-fill",
    link: "https://drive.google.com/file/d/13UE_6uIzBOVsizUry7VYXwcqpkcAuWV0/view?usp=drivesdk",
  },
];

const Experience = () => (
  <section
    className="py-5"
    style={{
      background: "linear-gradient(to right, #f8fafc, #e0f2fe)",
    }}
  >
    <div className="container">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#1e40af" }}>
        <i className="bi bi-briefcase-fill me-2"></i>Experience
      </h2>
      <div className="row g-4 justify-content-center">
        {experiences.map(
          ({ role, company, duration, description, color, icon, link }, i) => (
            <div key={i} className="col-md-6">
              <div
                className="p-4 ps-5 rounded shadow-lg h-100 position-relative overflow-hidden"
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: `6px solid ${color}`,
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.04)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {/* Icon circle */}
                <div
                  style={{
                    backgroundColor: color,
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 22,
                    position: "absolute",
                    top: 20,
                    left: 20,
                    boxShadow: `0 0 10px ${color}`,
                  }}
                >
                  <i className={icon}></i>
                </div>

                {/* Text content */}
                <div style={{ paddingLeft: 65 /* enough space for icon + margin */ }}>
                  <h4 className="fw-bold" style={{ color }}>
                    {role}
                  </h4>
                  <p className="text-muted mb-1">{company}</p>
                  <small className="text-secondary">{duration}</small>
                  <p className="mt-3 fw-medium">{description}</p>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export default Experience;
