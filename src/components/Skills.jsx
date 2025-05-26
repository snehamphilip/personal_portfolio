import React from "react";

const skills = [
  {
    category: "Programming Languages",
    items: ["C", "Python", "Java"],
    color: "#4f46e5",
    icon: "bi bi-code-slash",
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "React (JSX)"],
    color: "#10b981",
    icon: "bi bi-window-stack",
  },
  {
    category: "Database Management",
    items: ["MySQL"],
    color: "#f59e0b",
    icon: "bi bi-database-fill",
  },
  {
    category: "Core Interests",
    items: ["Artificial Intelligence (AI)", "Mobile App Development", "Cybersecurity"],
    color: "#ec4899",
    icon: "bi bi-lightbulb-fill",
  },
  {
    category: "Tools & Frameworks",
    items: ["Git", "Bootstrap", "VS Code"],
    color: "#06b6d4",
    icon: "bi bi-tools",
  },
  {
    category: "Soft Skills",
    items: ["Problem-solving", "Collaboration", "Adaptability"],
    color: "#8b5cf6",
    icon: "bi bi-people-fill",
  },
];

const Skills = () => (
  <section
   id="skills" 
    className="py-5"
    style={{
      background:
        "radial-gradient(circle at bottom left, #e0f2fe, #dbeafe, #bfdbfe)",
    }}
    
  >
    <div className="container">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#1e3a8a" }}>
        <i className="bi bi-tools me-2"></i>Technical Skills
      </h2>
      <div className="row g-4 justify-content-center">
        {skills.map(({ category, items, color, icon }, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div
              role="region"
              aria-label={`${category} skills`}
              tabIndex={0}
              className="p-4 rounded shadow-lg h-100 position-relative overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                borderTop: `5px solid ${color}`,
                paddingRight: "60px", // Space for icon
                transition: "transform 0.3s ease",
                cursor: "default",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
                  fontSize: 20,
                  position: "absolute",
                  top: 20,
                  right: 20,
                  boxShadow: `0 0 10px ${color}`,
                }}
                aria-hidden="true"
              >
                <i className={icon}></i>
              </div>

              <h4
                className="fw-bold mb-3"
                style={{
                  color: color,
                  wordBreak: "break-word",
                  maxWidth: "90%",
                }}
              >
                {category}
              </h4>

              <ul className="ps-3 mb-0">
                {items.map((item, i) => (
                  <li key={i} style={{ fontWeight: "500" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

