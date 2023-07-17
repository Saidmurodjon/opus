import React, { useState, useEffect } from "react";
import { Breadcrumb, Title, CourseCard, Pagination } from "../components";

import { cefr, sat } from "../assets/data/data";
import axios from "axios";

const Results = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  console.log(SERVER_URL);
  const [status, setStatus] = useState("#ielts");
  const [next, setNext] = useState({
    page: 1,
    limit: 2,
  });
  const [ielts, setIelts] = useState([]);
  const [count, setCount] = useState(0);
  console.log(ielts);
  useEffect(() => {
    const Fun = async () => {
      try {
        const res = await axios.get(
          `${SERVER_URL}ielts/count`,
          next
          // TOKEN
        );
        if (res.status === 200) {
          setCount(res.data);
        }
      } catch (err) {
        // console.log(err);
      }
    };
    Fun();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const Fun = async () => {
      try {
        const res = await axios.get(
          `${SERVER_URL}ielts?page=${next.page}&limit=${next.limit}`,
          next
          // TOKEN
        );
        if (res.status === 200) {
          setIelts([...ielts, ...res.data]);
          setNext({ ...next, page: next.page + 1 });
        }
      } catch (err) {
        // if (err.response.status === 404) {
        //   setRun(!run);
        // }
        // console.log(err);
      }
    };
    Fun();
    // eslint-disable-next-line
  }, [next]);

  return (
    <div className="container">
      <Breadcrumb current="Courses" />
      <Title title="our results" subtitle="find the right course for you" />
      <section className="courses my-0 ">
        <div className="row justify-content-center">
          <div className="col-12">
            <nav>
              <div
                className="nav nav-tabs mb-4 border-0 justify-content-center "
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active rounded-3 me-2 px-4 mb-2 mb-md-0"
                  onClick={() => setStatus("#ielts")}
                  data-bs-toggle="tab"
                >
                  IELTS
                </button>
                <button
                  className="nav-link rounded-3 me-2 px-4 mb-2 mb-md-0"
                  onClick={() => setStatus("#sat")}
                  data-bs-toggle="tab"
                >
                  SAT
                </button>
                <button
                  className="nav-link rounded-3 me-2 px-4 mb-2 mb-md-0"
                  onClick={() => setStatus("#cefr")}
                  data-bs-toggle="tab"
                >
                  CEFR
                </button>
              </div>
            </nav>
            <div className="tab-content " id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="ielts"
                role="tabpanel"
                aria-labelledby="ielts-tab"
              >
                <div className="row justify-content-center g-4 ">
                  {(status === "#ielts"
                    ? ielts
                    : status === "#cefr"
                    ? cefr
                    : sat
                  ).map((item) => (
                    <CourseCard key={item.id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
         
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
