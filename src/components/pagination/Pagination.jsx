import React from "react";
import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = ({ currentPage, setPage, total }) => {
  

  
  return (
    <section className="pagination justify-content-around">
      <nav aria-label="Page navigation ">
        <ul className="pagination">
          <li
            className="page-item"
            onClick={() =>
              setPage(currentPage - 1 === 0 ? currentPage : currentPage - 1)
            }
          >
            <Link to={""} className="page-link" aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </Link>
          </li>
          <li
            className={`page-item ${currentPage - 1 === 0 ? "d-none" : ""}`}
            onClick={() =>
              setPage(currentPage - 1 === 0 ? currentPage : currentPage - 1)
            }
          >
            <Link to={""} className="page-link">
              {currentPage - 1 === 0 ? "" : currentPage - 1}
            </Link>
          </li>
          <li className="page-item active">
            <Link to={""} className="page-link">
              {currentPage}
            </Link>
          </li>
          <li
            className={`page-item ${currentPage + 1 < total ? "" : "d-none"}`}
            onClick={() => setPage(currentPage + 1)}
          >
            <Link to={""} className="page-link">
              {currentPage + 1}
            </Link>
          </li>
          <li
            className={`page-item ${currentPage + 2 < total ? "" : "d-none"}`}
            onClick={() => setPage(currentPage + 2)}
          >
            <Link to={""} className="page-link ">
              {currentPage + 2}
            </Link>
          </li>
          <li
            className={`page-item ${currentPage + 3 < total ? "" : "d-none"}`}
          >
            <Link to={""} className="page-link">
              ...
            </Link>
          </li>
          <li className={`page-item ${currentPage === total ? "d-none" : ""}`}>
            <Link to={""} className="page-link">
              {total}
            </Link>
          </li>

          <li
            className="page-item"
            onClick={() =>
              setPage(currentPage !== total ? currentPage + 1 : currentPage)
            }
          >
            <Link to={""} className="page-link" aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;

