import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 position-static w-100 top-0 ">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="theme-btn w-100 my-4">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
