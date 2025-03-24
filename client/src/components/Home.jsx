import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./images/home-cover.png";

import "./styles/home.css";
import { Carousel } from "react-bootstrap";

import "swiper/css/bundle";

import Testimonial from "./Testimonial";

import Domains from "./Domains";
import { Link } from "react-router-dom";
import AIWriter from "react-aiwriter";

export default function Home() {
  toast("Click here to set remainder.");

 
  return (
    <>
      {/* <Link to="/reminder">
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
      </Link> */}

      {/* <div className="">
          <img className="graphic rounded img-fluid" src={graphic} alt="" />
        </div> */}
        <section className="home-sec">
      <div className="main mb-5  ">
        <div className="row d-flex mx-auto align-items-center">
          <div className="text col-lg-6 ">
            <div className="codebird">
              <h1 className="text-brown main-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  SEC
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    ON
                  </span>                 
                  D
                
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  {" "}I
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    NN
                  </span>                 
                  I
                </span>
                <span className="text-warn" style={{ color: "#EEE" }}>
                    N
                  </span>
                  GS
                  </span>
              </h1>
            </div>
            <div className="sub-text my-5 text-white">
              <span>
              Our website can provide comprehensive information about various old age homes, including their location, facilities, services, and the level of care provided. This helps senior citizens and their families make informed decisions about choosing the right home for their specific need. Moreover, our website also caters the condition of adopting a parent. Also, it provides a source of employment as a caregiver or volunteer those who want to look after the aged people.
              </span>
            </div>
            {/* <Link to="https://discord.gg/m6AMnhBXwn" className="">
              <button type="button" className="btn btn-info text-white btn-sm mb-5">
                Contact Us
              </button>
            </Link> */}
            <div className="btn-group">
            <a href="tel: 6290374022" target="blank">
              <button
                type="button"
                className="btn btn-warning text-dark btn-sm my-2"
                style={{ backgroundColor: "#15A6BF" }}
              >
                
                <i  className="fa-sharp fa-solid fa-phone fa-fade text-light"></i>{" "}
                <span className="text-light"> &nbsp; 1800 111 363</span>
              </button>
            </a>

            <a href="/volunteer" target="blank">
              <button
                type="button"
                className="btn btn-warning text-dark btn-sm my-2"
                style={{ backgroundColor: "#15A6BF" }}
              >
                
                <i  className="fa-sharp fa-solid fa-person fa-fade text-light"></i>{" "}
                <span className="text-light"> &nbsp; Become a volunteer</span>
              </button>
            </a>
            </div>
          </div>

          <div className="col-lg-6 homeCar  ">
            <div  className="container">
              <div  className="image-container">
                <img src={img} alt="Background" className="home-pic h-5 img-fluid" style={{height:"37rem"}} />
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DOMAINS */}

      <Domains></Domains>
      {/* TESTIMONIAL */}
      <Testimonial></Testimonial>
      </section>
    </>
  );
}
