import React from 'react'
import { useTheme } from "../context/ThemeContext";
import { Link} from "react-router-dom";

function Adopt() {
  const { theme } = useTheme();
  return (
   <>

   <form className='container mt-5 mx-auto'>
    
   <h2 className="heading my-2">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
                  AD
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    OP
                  </span>                 
                  T
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    {" "}P
                  </span> 
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  AR
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>                 
                  NT
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    S
                  </span>  
                </span>
                </span>
              </h1>
          </div>
        </h2>

<div className="mb-5 sub-text text-light">Do you think your residence could benefit from staying connected through our "Adopt Parent" program? If so, then register your care home today. <br /> Fill out the following form, and a member of your family will be in touch should be in touch for the complete process.</div>

  <div  className="mb-4">
    <div  className="col">
      <div  className="form-outline mb-4">
        <input type="text" id="form6Example1"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='First Name' />
        <label  className="form-label" for="form6Example1"></label>
      </div>
    </div>
    <div  className="col">
      <div  className="form-outline mb-4">
        <input type="text" id="form6Example2"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='Last Name' />
        <label  className="form-label" for="form6Example2"></label>
      </div>
    </div>
  </div>
  <div  className="form-outline mb-4">
    <input type="text" id="form6Example3"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='Address line 1' />
    <label  className="form-label" for="form6Example3"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="text" id="form6Example4"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='Address line 2' />
    <label  className="form-label" for="form6Example4"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="text" id="form6Example4"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='City/Town' />
    <label  className="form-label" for="form6Example4"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="Number" id="form6Example4"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='Postcode' />
    <label  className="form-label" for="form6Example4"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="email" id="form6Example5"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='Email' />
    <label  className="form-label" for="form6Example5"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="number" id="form6Example6"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='Phone' />
    <label  className="form-label" for="form6Example6"></label>
  </div>
  <div  className="form-outline mb-4">
    <input type="number" id="form6Example6"  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} placeholder='Annual Income' />
    <label  className="form-label" for="form6Example6"></label>
  </div>
  <div  className="form-outline mb-4">
    <textarea  className={`form-control ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}`} id="form6Example7" rows="4" placeholder='Additional Information' ></textarea>
    <label  className="form-label" for="form6Example7"></label>
  </div>
    <div className='d-block mx-auto text-center'>
  <a type="submit" href="mailto: secondinnings23@gmail.com" className={`btn ${theme === "light" ? "btn-primary" : "btn-light"} m-4`}>Submit</a>
  <br></br>
  <Link to="/ruleandregulation" className='text-danger d-flex justify-content-left fs-2'>*** Rules & Regulations!!! ***</Link>
  </div>
</form>
</>
  )
}

export default Adopt