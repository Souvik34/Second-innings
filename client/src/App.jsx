import React, { useEffect } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Gethome from "./components/Gethome";
import Gallery from "./components/gallery.jsx";
import Adopt from "./components/Adopt";
import Volunteer from "./components/Volunteer";
// import Faq from "./components/Faq";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import RuleandRegulation from "./components/ruleandregulation.jsx";
import Lottie from "lottie-react";
import lottie from "./components/images/loading.json";
import {useDispatch, useSelector} from 'react-redux';
import { loadUser } from "./redux/action.js"
import toast from "react-hot-toast";


// import GetLocation from "./components/GetLocation";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

// import AlanAI from "../src/components/AlanAI";
// import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");
    const status = urlParams.get("status");
    if (message) {
      if (status === "success") {
        toast.success(message);
      } else {
        toast.error(message);
      }
      window.history.pushState({}, document.title, "/");
    }
  }, []);

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      {loading ? (
        <Lottie
          className="lottie d-flex mx-auto"
          animationData={lottie}
          background="transparent"
        />
        
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home key="home" />}></Route>
            
            <Route
              exact
              path="faq"
              element={<Faq key="faq" />}
            ></Route>
            <Route
              exact
              path="gethome"
              element={<Gethome key="gethome" />}
            ></Route>
          
            <Route
              exact
              path="adopt"
              element={<Adopt key="adopt" />}
            ></Route>
            <Route
              exact
              path="ruleandregulation"
              element={<RuleandRegulation key="ruleandregulation" />}
            ></Route>
             <Route 
             exact 
             path="gallery" 
             element= {<Gallery key="gallery"/>}/>
            <Route
              exact
              path="signin"
              element={<SignIn key="signin" />}
            ></Route>
            <Route
              exact
              path="signup"
              element={<SignUp key="signup" />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
            <Route
              exact
              path="contact"
              element={<Contact key="contact" />}
            ></Route>
            <Route
              exact
              path="volunteer"
              element={<Volunteer key="volunteer" />}
            ></Route>
          </Routes>
          <Chatbot />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
