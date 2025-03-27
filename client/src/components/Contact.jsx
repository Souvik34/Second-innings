import React from "react";
import "./styles/contact.css";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { theme } = useTheme();
  return (
    <>
      <section  className="section-bg" data-scroll-index="7">
        <div  className="overlay pt-100 pb-100 ">
            <div  className="row d-flex align-items-center justify-content-center">
              <div  className="col-lg-6 d-flex align-items-center">
                <div  className="contact-info">
                  <h2  className="contact-title text-info">Have Any Questions?</h2>
                  <p className="sub-text">
                    Lorem ipsum is a dummy text used to replace text in some
                    areas just for the purpose of an example. It can be used in
                    publishing and graphic design. The lorem ipsum text is
                    usually a section of a Latin text by Cicero with words
                    altered, added and removed to make it nonsensical.
                  </p>
                  <ul  className="contact-info">
                    <li className="d-flex gap-2">
                      <div  className="info-left">
                        <i  className="fas fa-mobile-alt"></i>
                      </div>
                      <div  className="info-right">
                        <h4 className="sub-text">+91-8617011267</h4>
                      </div>
                    </li>
                    <li className="d-flex gap-2">
                      <div  className="info-left">
                        <i  className="fas fa-at"></i>
                      </div>
                      <div  className="info-right">
                        <a href="mailto:secondinnings29@gmail.com">
                          <h4 className="sub-text">secondinnings29@gmail.com</h4>
                        </a>
                      </div>
                    </li>
                    <li className="d-flex gap-2">
                      <div  className="info-left">
                        <i  className="fas fa-map-marker-alt"></i>
                      </div>
                      <div  className="info-right">
                        <a
                          href="https://www.google.com/maps/place/University+Institute+Of+Technology,+BU/@23.257267,87.846751,14z/data=!4m6!3m5!1s0x39f8361a58dcc565:0x37a42f6b23df16cd!8m2!3d23.2572665!4d87.8467508!16s%2Fm%2F0wbhsr6?hl=en"
                          target="blank"
                        >
                          <h4 className="sub-text">
                            Second, Golapbag North, Grand Trunk Rd, Burdwan,
                            West Bengal 713104
                          </h4>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div  className="col-lg-6 d-flex align-items-center">
                <div  className="contact-form">
                  <form id="contact-form" method="POST">
                    <input type="hidden" name="form-name" value="contactForm" />
                      <div  className="col-md-12">
                        <div  className="form-group">
                          <input
                            type="text"
                            name="name"
                             className={`form-control rounded-pill ${
                              theme === "dark" ? "bg-dark text-light" : "shadow bg-white text-dark"
                            }`}
                            id="first-name"
                            placeholder="Enter Your Name"
                            required="required"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                      <div  className="col-md-12">
                        <div  className="form-group">
                          <input
                            type="email"
                            name="email"
                            className={`form-control rounded-pill ${
                              theme === "dark" ? "bg-dark text-light" : "shadow bg-white text-dark"
                            }`}
                            id="email"
                            placeholder="Enter Your Email"
                            required="required"
                            autocomplete="off"
                          />
                        </div>
                      </div>

                      <div  className="col-md-12">
                        <div  className="form-group">
                          <div  className="form-floating">
                            <textarea
                            className={`form-control rounded ${
                              theme === "dark" ? "bg-dark text-light" : "shadow bg-white text-dark"
                            }`}
                              placeholder="Enter Your Message *"
                              name="message"
                              id="floatingTextarea"
                              required="required"
                              autocomplete="off"
                            ></textarea>
                            <label for="floatingTextarea"><span className={`comm ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Comments</span></label>
                          </div>
                        </div>
                      </div>
                      <div  className="col-md-12">
                        <button  className="btn-big btn btn-bg">
                          Send Us <i  className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
