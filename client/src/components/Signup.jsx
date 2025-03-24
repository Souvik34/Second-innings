import {  useEffect, useRef, useState } from "react";
import graphic from "./images/contact-anim.gif";
import "./styles/signin.css";
import AIWriter from "react-aiwriter";
import { useTheme } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { signup } from "../redux/action.js";
import { GoEye,GoEyeClosed } from "react-icons/go";

export default function SignUp() {
  const refForm = useRef();
  const { theme } = useTheme();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    phone: "",
    location: "",
    profileImage: null,
    profileImagePreview: null, 
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
        profileImagePreview: imageUrl,
      }));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    const { name, email, password, confirmPassword, role } = formData;

    if (!name || !email || !password || !confirmPassword || !role) {
      console.log(formData);
      toast.error("Please fill in all required fields!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return false;
    }

    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if(!validateForm()) return;
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("location", formData.location);
    if (formData.profileImage) {
      formDataToSend.append("profile", formData.profileImage);
    }

    dispatch(signup(formDataToSend));
  }

  return (
    <>
      <div className="main">
        <div className="row d-flex mx-auto align-items-center">
          <div className="text col-lg-6 px-5">
            <div className="codebird">
              <h1 className="text-brown">
                S<span className="text-warning">ign</span>Up
              </h1>
            </div>
            <div className="sub-text my-5 text-white">
              <AIWriter delay={125}>
                Join our platform and be a part of something amazing. Sign up
                now and get started!
              </AIWriter>
            </div>
            <div className="signin-form mt-5">
              <form ref={refForm} onSubmit={handleSignup} encType="multipart/form-data">
              <ul className="flex flex-col items-center">
                  <li className="half">
                    <label for="full_name" className="text-white p-2">📝Full name:</label>
                    <input
                      className={`rounded-pill bg-${theme} ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                      type="text"
                      name="name"
                      id="full_name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </li>

                  <li className="half">
                  <label for="Email" className="text-white p-2">✉️E-mail id:</label>
                    <input
                      className={`rounded-pill bg-${theme} ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                      type="email"
                      id="Email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </li>

                  <li>
                  <label for="passcode" className="text-white p-2">🔐Password:</label>
                  <div className="d-flex relative align-items-center">
                    <input
                      className={`w-100 p-2 rounded-pill bg-${theme} ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                      type={`${showPassword ? "text" : "password"}`}
                      name="password"
                      id="passcode"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                      {
                        showPassword ?
                        <GoEyeClosed className="fs-4 password-icon" onClick={() => setShowPassword(false)} 
                        color={`${theme === "dark" ? "white" : "black"}`}
                        />:
                        <GoEye className="fs-4 password-icon" onClick={() => setShowPassword(true)}
                        color={`${theme === "dark" ? "white" : "black"}`}
                      />
                      }
                    </div>
                  </li>

                  <li>
                  <label for="confirm_password" className="text-white p-2">🔐Confirm Password:</label>
                  <div className="d-flex relative align-items-center">
                    <input
                      className={`w-100 p-2 rounded-pill bg-${theme} ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                      type={`${showConfirmPassword ? "text" : "password"}`}
                      id="confirm_password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                      {
                        showConfirmPassword ?
                        <GoEyeClosed className="fs-4 password-icon" onClick={() => setShowConfirmPassword(false)} 
                        color={`${theme === "dark" ? "white" : "black"}`}
                        />:
                        <GoEye className="fs-4 password-icon" onClick={() => setShowConfirmPassword(true)}
                        color={`${theme === "dark" ? "white" : "black"}`}
                      />
                      }
                  </div>
                  </li>

                  <li>
                  <label for="role" className="text-white p-2">💁Role:</label>
                    <select
                      className={`w-100 p-2 rounded-pill bg-${theme} ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="admin">Admin</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="adopter">Adopter</option>
                      <option value="user">User</option>
                    </select>
                  </li>

                  <li>
                    <label for="phone" className="text-white p-2">📱Phone Number:</label>
                    <input
                      className={`rounded-pill bg-${theme} ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone (Optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </li>

                  <li>
                    <label for="location" className="text-white p-2">📍Location:</label>
                    <input 
                      className={`rounded-pill bg-${theme} ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Location (Optional)"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </li>

                  <li>
                    <label className="text-white p-2">📷Upload Profile Image</label>
                    <br />
                    <input
                      type="file"
                      name="profileImage"
                      accept="image/*"
                      className={`rounded-pill bg-${theme} ${theme === 'dark' ? 'text-white' : 'text-dark'}`}
                      onChange={handleImageChange}
                    />
                  </li>

                  {formData.profileImagePreview && (
                    <li>
                      <img
                        src={formData.profileImagePreview}
                        alt="Profile Preview"
                        className="img-thumbnail mt-2"
                        style={{ maxWidth: "150px", borderRadius: "10px" }}
                      />
                    </li>
                  )}

                  {/* <div className="row mt-5 text-white"> */}
                  <li  className="w-100 d-flex justify-content-center mt-3">
                      <input
                        type="submit"
                        className="flat-button button btn bg-warning"
                        value="Sign Up"
                      />
                  </li>
                  <li  className="w-100 d-flex justify-content-center mt-3">
                      Already have an account? <a className="mx-1" href="/signin">Sign In Here.</a>
                  </li>
                    
                  {/* </div> */}
                </ul>
              </form>
            </div>
          </div>

          <div className="img-container anim col-lg-6 img-fluid mx-auto d-flex align-items-center justify-content-center">
            <img
              className="home-anim rounded img-fluid mx-auto d-flex"
              src={graphic}
              alt="Signup Animation"
            />
          </div>
        </div>
      </div>
    </>
  );
}
