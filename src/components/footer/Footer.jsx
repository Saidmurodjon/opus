import React from "react";
import { Link } from "react-router-dom";
import { contact } from "../../assets/data/data";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-contact col-12 py-3 ">
            <div className="row justify-content-between ">
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-text">
                  <a href={`tel:${contact.tel}`}>{contact.tel}</a>
                  {/* <h6>+1 5687485</h6> */}
                  <p>Mon-Fri 9am-6pm</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <a href={"mailto:" + contact.email}>{contact.email}</a>
                  <p>Send email</p>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="contact-icon pe-3">
                  <i className="fa fa-map"></i>
                </div>
                <div className="contact-text">
                  <h5>Addres</h5>
                  <a href={contact.map.location} target="blank">
                    {contact.map.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social col-12 py-3">
            <div className="row justify-content-center box rounded-0">
              <div className="col-8 ">
                <div className="row ">
                  <div className="col-12 col-md-6 text-center">
                    <p>connect with us on social media</p>
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-center align-items-baseline ">
                    {contact.social.map((item) => (
                      <a
                        href={item.path}
                        target="blank"
                        className="social-icon me-2"
                      >
                        <i className={item.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links col-12 py-3">
            <div className="row">
              <div className="links-pages  col-sm-6">
                <h3>
                  <Link to="/" className=" text-uppercase fs-3 fw-bold">
                    <span>O</span>pus
                  </Link>
                </h3>
                <ul className="navbar-nav ">
                  {}
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/results">
                      Results
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="signup" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/login" className="nav-link">
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="links-info  col-sm-6 mt-4 mt-sm-0">
                <h3>About us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae natus labore laudantium esse accusantium corporis
                  delectus rem nam corrupti ipsa velit culpa sint veniam
                  dignissimos incidunt itaque maiores, sed laborum odio iure.
                  Illum veniam eius dolorem nisi delectus atque, aliquam facilis
                  debitis earum illo modi temporibus officiis eveniet ullam
                  omnis quia{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright col-12 text-center py-3 ">
            <p>
              &copy;{new Date().getFullYear()} by
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#"> SX Group</a>, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
