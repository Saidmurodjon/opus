import React from "react";
import { Link } from "react-router-dom";

import { CourseCard, Title } from "..";

import { ielts } from "../../assets/data/data";

const Results = () => {
  return (
    <section className="courses">
      <div className="container">
        <Title title="Results" subtitle="Find the right course for you" />
        <div className="row gx-4 gy-5">
          {ielts.slice(0, 4).map((item) => (
            <CourseCard {...item} key={item.id} />
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <Link to="/results" className="theme-btn">
              view all courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
