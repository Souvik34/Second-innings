import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import navpic from "./images/logo.png";
import { useTheme } from "../context/ThemeContext";
import { BsSunFill, BsMoonFill } from "react-icons/bs"
// import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-gradient ${theme === "light" ? "bg-light navbar-light" : "bg-dark navbar-dark"} rounded`}>
        <div className="container-fluid">
          <img className="mx-1" src={navpic} alt="" height="60" width="60" />
          <Link className="navbar-brand mx-1 text-center" to="/">
            <p className={`navMainTxt mt-3 fw-bold fs-3 ${theme === "light" ? "text-dark" : "text-light"}`}>
              SECOND INNINGS
              {/* <p style={{ fontSize: "12px" }}>The Coding Club of UIT, BU</p> */}
            </p>
          </Link>
          <button
            className={`navbar-toggler bg-${theme}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
          <ul  className="navbar-nav  fs-5 align-items-center">
                    <li  className="nav-item">
                      <Link className="nav-link" to="/">
                        <p className={`text-center fw-bold st mb-0 ${theme === "light" ? "text-dark" : "text-white"}`}>Home</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/adopt">
                        <p className={`text-center fw-bold st mb-0 ${theme === "light" ? "text-dark" : "text-white"}`}>Adopt parents</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/gethome">
                        <p className={`text-center fw-bold st mb-0 ${theme === "light" ? "text-dark" : "text-white"}`}>Find a home</p>
                      </Link>
                    </li>
                    

                    <li className="nav-item">
                      <Link className="nav-link" to="/gallery">
                        <p className={`text-center fw-bold st mb-0 ${theme === "light" ? "text-dark" : "text-white"}`}> Gallery</p>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        <p className={`text-center fw-bold st mb-0 ${theme === "light" ? "text-dark" : "text-white"}`}>Contact</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/faq">
                        <p className={`text-center fw-bold st mb-0 ${theme === "light" ? "text-dark" : "text-white"}`}>FAQs</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signin">
                        <p className={`text-center fw-bold st mb-0 ${theme === "light" ? "text-dark" : "text-white"}`}>Login</p>
                      </Link>
                    </li>
                     <li className="nav-item">
                        <button className={`btn p-1 border-0 outline-0 shadow-none bg-transparent transition ease-out ${theme === "light" ? "text-dark" : "text-white"}`} onClick={toggleTheme}>
                          {theme === "light" ? <BsMoonFill size={25} /> : <BsSunFill size={25} />}
                        </button>
                    </li>
                  </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
}
