import React from "react";

import "./courseCard.css";

const CourseCard = ({
  title,
  candidate,
  teacher,
  certificate,
  overall,
  date,
}) => {
  return (
    <div className="col-md-6 col-lg-3">
      <article className="course">
        <div className="course-header">
          <img src={certificate} alt={title} className="rounded" />
          <span className="theme-bg px-2 py-1 fw-bold rounded">{overall}</span>
        </div>
        <h3 className="course-title my-3 fs-5">{candidate}</h3>
        <div className="course-footer">
          <div className="footer-creator">
            <span>
              <b>Teacher:</b> {teacher}
            </span>
          </div>
          <div className="footer-stars mt-2 d-flex">
            <span className="me-1 fw-bold">({date})</span>
          </div>
        </div>
      </article>

      {/* <Certificate image={certificate} modal={show} /> */}
    </div>
  );
};

export default CourseCard;
