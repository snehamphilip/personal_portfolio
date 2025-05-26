import React from "react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A React-based portfolio with Bootstrap styling and dynamic content.",
    link: "https://github.com/yourprofile/portfolio",
    color: "#0ea5e9", // Bright blue
    icon: "bi bi-laptop",
  },
  {
    title: "Expense Tracker",
    description:
      "A website used to track and categorize expenses built with HTML, CSS, and Python.",
    link: "https://github.com/snehamphilip/expense-tracker",
    color: "#14b8a6", // Teal
    icon: "bi bi-wallet2",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI chatbot built with HTML, CSS, and Python.",
    link: "https://github.com/snehamphilip/ai-chatbot",
    color: "#f59e0b", // Amber
    icon: "bi bi-robot",
  },
  {
    title: "Pet Care App",
    description:
      "Group project (4 members) built with Flutter and Firebase for pet care management.",
    link: "#", // No GitHub link provided
    color: "#8b5cf6", // Violet
    icon: "bi bi-heart-pulse",
  },
];

const Projects = () => (
  <section
    id="projects" // Added for linking/navigation
    className="py-5"
    style={{
      background:
        "radial-gradient(circle at bottom left, #e0f2fe, #dbeafe, #bfdbfe)",
    }}
  >
    <div className="container">
      <h2 className="text-center fw-bold mb-5" style={{ color: "#1e3a8a" }}>
        <i className="bi bi-folder2-open me-2"></i>Projects
      </h2>
      <div className="row g-4 justify-content-center">
        {projects.map(({ title, description, link, color, icon }, i) => (
          <div key={i} className="col-md-6">
            <div
              className="p-4 rounded shadow-lg h-100 d-flex flex-column justify-content-between position-relative"
              style={{
                backgroundColor: "#fff",
                borderTop: `5px solid ${color}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: link !== "#" ? "pointer" : "default",
              }}
              onMouseEnter={(e) => {
                if (link !== "#") {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = `0 10px 20px ${color}80`;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Icon Circle */}
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
                  right: 20,
                  boxShadow: `0 0 10px ${color}`,
                }}
                aria-hidden="true"
              >
                <i className={icon}></i>
              </div>

              <div>
                <h4 className="fw-bold" style={{ color }}>
                  {title}
                </h4>
                <p style={{ fontWeight: "500" }}>{description}</p>
              </div>
              {link !== "#" ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary align-self-start mt-3"
                  style={{ fontWeight: "600" }}
                  aria-label={`View ${title} project on GitHub`}
                >
                  View on GitHub
                </a>
              ) : (
                <button
                  disabled
                  className="btn btn-outline-secondary align-self-start mt-3"
                  style={{ fontWeight: "600", cursor: "default" }}
                  aria-disabled="true"
                >
                  No Repository
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
