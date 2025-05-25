import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CertificatesSection = () => {
  const extracurriculars = [
    {
      description: "IEEE membership from 2022 - 2026",
      
    },
    {
      description: "Mulearn membership from 2024 - 2026",
      
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to right, #f0fdfa, #e0f7f1)",
      }}
    >
      <div className="container">
        {/* Extracurricular Activities as point-wise list */}
        <section>
          <h2 className="text-success mb-4 fw-bold">
            <i className="bi bi-people-fill me-2"></i>Extracurricular Activities
          </h2>
          <ol className="ps-3">
            {extracurriculars.map((activity, index) => (
              <li key={index} className="mb-2">
                {activity.description}{" "}
                {activity.certificateLink && (
                  <a
                    href={activity.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-success ms-2"
                    style={{ fontSize: "0.8rem", padding: "0.15rem 0.4rem" }}
                  >
                    View Certificate
                  </a>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
};

export default CertificatesSection;

