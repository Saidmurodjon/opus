import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumb } from "../components";
import { toast } from "react-toastify";

const LogIn = () => {
  return (
    <>
      <Breadcrumb current="LogIn" />
      <section className="login">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <div className="box">
                <h2 className="text-center fs-4 mb-5 fw-bold">
                  Log In To Your Account
                </h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-3 ">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex justify-content-end my-3">
                    <Link to={""}>Forgot Password?</Link>
                  </div>
                  <div className="form-group mb-3 ">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <button
                    type="submit"
                    className="theme-btn w-100 my-4"
                    onClick={() =>
                      toast.warn("Server is not working !", {
                        theme: "colored",
                        position: "top-right",
                      })
                    }
                  >
                    Log In
                  </button>
                  <p className="text-center">
                    Don't have an account ?<Link to="/signup"> Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
