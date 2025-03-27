import React, { useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "./styles/adopt.css";
import { Link} from "react-router-dom";

function Adopt() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    email: "",
    phone: "",
    annualIncome: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const postcodeRegex = /^[0-9]{6}$/;
  const incomeRegex = /^[0-9]+$/;

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.address1.trim()) newErrors.address1 = "Address line 1 is required";
    if (!formData.city.trim()) newErrors.city = "City/Town is required";
    if (!postcodeRegex.test(formData.postcode)) newErrors.postcode = "Invalid postcode (6 digits)";
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
    if (!incomeRegex.test(formData.annualIncome)) newErrors.annualIncome = "Invalid income format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form className='container mt-5 mx-auto' onSubmit={handleSubmit}>
      <h2 className="heading my-2">
        <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
            <span style={{ color: "#15A6BA", fontWeight: "700" }}>AD
              <span style={{ color: "#EEE" }}>OPT</span> PARENT
            </span>
          </h1>
        </div>
      </h2>

      <div className="row mb-5 text-light fs-4">
        Do you think your residence could benefit from staying connected through our "Adopt Parent" program? Register your care home today.
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


  <div className=" d-flex flex-column pt-5 me-2 align-items-center"> 
    <label className="form-label text-white">First name:</label>
    {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
    <input
     style={{ width: "36rem" }}
      type="text"
      name="firstName"
      className={`form-control rounded-pill mb-3 bg-${theme} ${theme === "dark" ? "text-light" : "text-dark"}`}
      placeholder="Enter your first name"
      value={formData.firstName}
      onChange={handleChange}
    />
  </div>


  
  <div className=" d-flex flex-column p-0 align-items-center"> 
    <label className="form-label text-white">Last name:</label>
    {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
    <input
     style={{ width: "36rem" }}
      type="text"
      name="lastName"
      className={`form-control rounded-pill mb-3 bg-${theme} ${theme === "dark" ? "text-light" : "text-dark"}`}
      placeholder="Enter your last name"
      value={formData.lastName}
      onChange={handleChange}
    />
    <div className='d-block mx-auto text-center'>
  <a type="submit" href="mailto: secondinnings23@gmail.com" className={`btn ${theme === "light" ? "btn-primary" : "btn-light"} m-4`}>Submit</a>
  <br></br>
  <Link to="/ruleandregulation" className='text-danger d-flex justify-content-left fs-2'>*** Rules & Regulations!!! ***</Link>

  </div>


<div className="d-flex flex-column align-items-center">
  <label className="form-label text-white">Address line 1:</label>
  {errors.address1 && <span className="text-danger">{errors.address1}</span>}
  <input
    style={{ width: "36rem" }}
    type="text"
    name="address1"
    className={`form-control rounded-pill mb-3 bg-${theme} ${
      theme === "dark" ? "text-light" : "text-dark"
    }`}
    placeholder="Enter your address"
    value={formData.address1}
    onChange={handleChange}
  />
</div>


<div className="d-flex flex-column align-items-center">
  <label className="form-label text-white">Address line 2:</label>
  <input
    style={{ width: "36rem" }}
    type="text"
    name="address2"
    className={`form-control rounded-pill mb-3 bg-${theme} ${
      theme === "dark" ? "text-light" : "text-dark"
    }`}
    placeholder="Optional"
    value={formData.address2}
    onChange={handleChange}
  />
</div>


<div className="d-flex flex-column align-items-center">
  <label className="form-label text-white">City/Town:</label>
  {errors.city && <span className="text-danger">{errors.city}</span>}
  <input
    style={{ width: "36rem" }}
    type="text"
    name="city"
    className={`form-control rounded-pill mb-3 bg-${theme} ${
      theme === "dark" ? "text-light" : "text-dark"
    }`}
    placeholder="Enter your city/town"
    value={formData.city}
    onChange={handleChange}
  />
</div>


<div className="d-flex flex-column align-items-center">
  <label className="form-label text-blue">Postcode:</label>
  {errors.postcode && <span className="text-danger">{errors.postcode}</span>}
  <input
    style={{ width: "36rem" }}
    type="text"
    name="postcode"
    className={`form-control rounded-pill mb-3 bg-${theme} ${
      theme === "dark" ? "text-light" : "text-dark"
    }`}
    placeholder="6-digit postcode"
    value={formData.postcode}
    onChange={handleChange}
  />
</div>


<div className="d-flex flex-column align-items-center">
  <label className="form-label text-white text-left">E-mail:</label>
  {errors.email && <span className="text-danger">{errors.email}</span>}
  <input
    style={{ width: "36rem" }}
    type="email"
    name="email"
    className={`form-control rounded-pill mb-3 bg-${theme} ${
      theme === "dark" ? "text-light" : "text-dark"
    }`}
    placeholder="Enter your email"
    value={formData.email}
    onChange={handleChange}
  />
</div>


<div className="d-flex flex-column align-items-center">
  <label className="form-label text-white">Phone:</label>
  {errors.phone && <span className="text-danger">{errors.phone}</span>}
  <input
    style={{ width: "36rem" }}
    type="text"
    name="phone"
    className={`form-control rounded-pill mb-3 bg-${theme} ${
      theme === "dark" ? "text-light" : "text-dark"
    }`}
    placeholder="Enter 10-digit phone number"
    value={formData.phone}
    onChange={handleChange}
  />
</div>


<div className="d-flex flex-column align-items-center">
  <label className="form-label text-white">Annual Income:</label>
  {errors.annualIncome && <span className="text-danger">{errors.annualIncome}</span>}
  <input
    style={{ width: "36rem" }}
    type="text"
    name="annualIncome"
    className={`form-control rounded-pill mb-3 bg-${theme} ${
      theme === "dark" ? "text-light" : "text-dark"
    }`}
    placeholder="Enter your annual income"
    value={formData.annualIncome}
    onChange={handleChange}
  />
</div>


<div className="d-flex flex-column align-items-center">
  <label className="form-label text-white">Remarks:</label>
  <textarea
    style={{ width: "36rem" }}
    name="remarks"
    className={`form-control rounded-pill mb-3 bg-${theme} ${
      theme === "dark" ? "text-light" : "text-dark"
    }`}
    rows="4"
    placeholder="Additional comments (optional)"
    value={formData.remarks}
    onChange={handleChange}
  ></textarea>
</div>


      <div className='d-block mx-auto text-center'>
        <button type="submit" className={`btn ${theme === "light" ? "btn-primary" : "btn-light"} m-4`}>Submit</button>
        <br />
        <Link to="/ruleandregulation" className='text-danger fs-2'><b>*** Rules & Regulations!!! ***</b></Link>
      </div>
    </form>
  );
}

export default Adopt;
