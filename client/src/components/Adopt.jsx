import React, { useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "./styles/adopt.css";

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

  // Regular expressions for validation
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
      </div>

      {/* First Name & Last Name */}
      <div className="row mb-4">
        <div className="col">
          <label className="form-label text-white pt-5">First name:</label> {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
          <input type="text" name="firstName" className="form-control rounded-pill" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} />
          
        </div>

        <div className="col">
          <label className="form-label text-white pt-5">Last name:</label> {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
          <input type="text" name="lastName" className="form-control rounded-pill" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} />
          
        </div>
      </div>

      {/* Address Fields */}
      <label className="form-label text-white">Address line 1:</label>  {errors.address1 && <span className="text-danger">{errors.address1}</span>}

      <input type="text" name="address1" className="form-control rounded-pill mb-3" placeholder="Enter your address" value={formData.address1} onChange={handleChange} />
     
      <label className="form-label text-white">Address line 2:</label>
      <input type="text" name="address2" className="form-control rounded-pill mb-3" placeholder="Optional" value={formData.address2} onChange={handleChange} />

      <label className="form-label text-white">City/Town:</label> {errors.city && <span className="text-danger">{errors.city}</span>}
      <input type="text" name="city" className="form-control rounded-pill mb-3" placeholder="Enter your city/town" value={formData.city} onChange={handleChange} />
      

      <label className="form-label text-white">Postcode:</label>  {errors.postcode && <span className="text-danger">{errors.postcode}</span>}
      <input type="text" name="postcode" className="form-control rounded-pill mb-3" placeholder="6-digit postcode" value={formData.postcode} onChange={handleChange} />
     

      {/* Email & Phone */}
      <label className="form-label text-white">E-mail:</label> {errors.email && <span className="text-danger">{errors.email}</span>}

      <input type="email" name="email" className="form-control rounded-pill mb-3" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
      
      <label className="form-label text-white">Phone:</label>  {errors.phone && <span className="text-danger">{errors.phone}</span>}
      <input type="text" name="phone" className="form-control rounded-pill mb-3" placeholder="Enter 10-digit phone number" value={formData.phone} onChange={handleChange} />
     

      {/* Annual Income */}
      <label className="form-label text-white">Annual Income:</label> {errors.annualIncome && <span className="text-danger">{errors.annualIncome}</span>}
      <input type="text" name="annualIncome" className="form-control rounded-pill mb-3" placeholder="Enter your annual income" value={formData.annualIncome} onChange={handleChange} />
      

      {/* Remarks */}
      <label className="form-label text-white">Remarks:</label>
      <textarea name="remarks" className="form-control rounded-pill mb-3" rows="4" placeholder="Additional comments (optional)" value={formData.remarks} onChange={handleChange}></textarea>

      <div className='d-block mx-auto text-center'>
        <button type="submit" className={`btn ${theme === "light" ? "btn-primary" : "btn-light"} m-4`}>Submit</button>
        <br />
        <Link to="/ruleandregulation" className='text-danger fs-2'><b>*** Rules & Regulations!!! ***</b></Link>
      </div>
    </form>
  );
}

export default Adopt;
