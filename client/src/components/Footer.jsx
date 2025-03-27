import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";
import { useTheme } from "../context/ThemeContext";


export default function Footer() {
  const { theme } = useTheme()

  return (
    <div className="mt-5">
      <section className={`bg-${theme} rounded ${theme === 'light' ? 'text-dark' : 'text-white'}`}>
      <footer className="text-lg-start">
        {/* <section className="d-flex justify-content-between p-4 bg-light text-dark shadow rounded">
          <div className="me-5">
            <span>Be Our Member </span>
          </div>

          <div>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-facebook fa-  "></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-discord fa-  "></i>
            </a>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-linkedin fa-  "></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-instagram fa-  "></i>
            </a>
            <a
              // href="https://bit.ly/3qFvDlv"
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-blogger fa-  "></i>
            </a>
          </div>
        </section> */}

        <section className={`bg-${theme} shadow rounded border ${theme === 'light' ? 'text-dark' : 'text-white'} border-${theme}`}>
          <div className="text-md-start mt-4">
            <div className="row mt-4">
              <div className="col-md-12 col-lg-4 col-xl-3 mx-auto mb-4 mt-4">
                <h6 className=" fw-bold">Second Innings - A Perfect Home, Away From Home</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr1" />
                <p className={`${theme === 'light' ? 'text-dark' : 'text-white'}`}>
                  <p className="just d-flex mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia dolorum voluptate, laudantium accusantium deserunt eos
                explicabo, ipsa exercitationem asperiores voluptatum illum quasi
                id, sequi impedit nobis. Doloremque corporis veritatis neque?
                  </p>
                </p>
              </div>

              {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Website Developer</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sanjibkumardas-webdev/"
                    className="text-dark"
                  >
                    Developed with ❤ <br />
                    By <br />
                    Team
                  </a>
                </p>
                <br />
                <h6 className="text-uppercase fw-bold">Faculty Advisor</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sumit-gupta-sgp-168109151/"
                    className="text-dark"
                  >
                    Prof. Sumit Gupta
                    <br />
                    Faculty Advisor, The Code Bird
                    <br />
                    Assistant Professor, CSE, UIT, BU
                  </a>
                </p>
                ALAN AI
                <h6 className="fw-bold mt-4">Alan AI</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr2" />
                <p className="just">
                  Alan AI - Fully voice automated auditory bot that will read
                  out every minute details of a place that a tourist asks for
                  and specially visually impair tourists.
                </p>
              </div> */}

              <div className="col-md-12 col-lg-2 col-xl-2 mx-auto mb-4 mt-4">
                <h6 className="text-uppercase fw-bold">Nav links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr3" />
                <p>
                  <Link to="/" className={`${theme === 'light' ? 'text-dark' : 'text-white'}`}>
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/gethome" className={`${theme === 'light' ? 'text-dark' : 'text-white'}`}>
                    Find A Home
                  </Link>
                </p>
                <p>
                  <Link to="/adopt" className={`${theme === 'light' ? 'text-dark' : 'text-white'}`}>
                    Adopt Parents
                  </Link>
                </p>
                <p>
                  <Link to="/gallery" className={`${theme === 'light' ? 'text-dark' : 'text-white'}`}>
                    Gallery
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className={`${theme === 'light' ? 'text-dark' : 'text-white'}`}>
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="/faq" className={`${theme === 'light' ? 'text-dark' : 'text-white'}`}>
                    FAQs
                  </Link>
                </p>
                
                {/* <p>
                  <Link
                    to="?"
                    className="text-dark"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    Helpline
                  </Link>
                </p> */}
                {/* Chatbot */}
              </div>

              <div className="col-md-12 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4 last">
                <h6 className="text-uppercase fw-bold">Contact Us</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr4" />
                <p>
                  <i className="fa-solid fa-map-location-dot mr-3"></i> Kolkata
                  <p> West Bengal, India</p>
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  secondinnings@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i>{" "}
                  <a href="tel: 6290374022" className={theme === "light" ? "text-dark" : "text-white"}>1800 111 363</a>
                </p>
                <h6 className="text-uppercase fw-bold mt-4">Connect with us</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr4" />
                <p>
                <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-facebook fa-  "></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-discord fa-  "></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-linkedin fa-  "></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-instagram fa-  "></i>
            </a>
            <a
              
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-dark me-4"
            >
              <i className="fab fa-blogger fa-  "></i>
            </a>
          </div>
                </p>
              </div>
              
            </div>
          </div>
        </section>

        <div className="text-center p-3 bg-muted text-muted">
          © 2025 Copyright: &nbsp;
          <a className="text-muted" href="/">
            Second Innings
          </a>
        </div>
      </footer>
      </section>
    </div>
  );
}
