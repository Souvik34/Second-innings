import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles/domains.css";


import food from "./images/S1.jpg";
import train from "./images/S2.jpg";




// import required modules
import { Pagination } from "swiper";

export default function Domains() {
  return (
    <>
      <div className="container domain">
        <h2 className="heading my-4">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"500" }}>
                  S
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>                 
                  RV
                
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    I
                  </span>                 
                  C
                </span>
                <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>
                  S
                  </span>
              </h1>
          </div>
        </h2>
        

        <div className="container text-center ">
          <div className="row d-flex gap-5 justify-content-between">
            
            <div  className="col text-center my-auto">
              <div className=""><img src={food} alt="" className=" img-fluid rounded-circle" style={{width:"80%"}} /></div>
              <div className="fs-4 my-3"><span><a className="sub-text" href="/gethome ">Find A Home</a></span></div>             
            </div>
            
            <div  className="col  text-center my-auto">
              <div className=""><img src={train} alt="" className=" img-fluid rounded-circle" style={{width:"80%"}} /></div>
              <div className="fs-4 my-3 "><span> <a className="sub-text" href="/adopt">Adopt Parent</a></span></div> 
            </div>

           
            
          </div>


          
          </div>
        {/* Domains */}
      </div>
    </>
  );
}
