import React from "react";
import "./styles/gallery.css";
import { useTheme } from "../context/ThemeContext";

// Sample Image Data
const images = [
  "https://images.unsplash.com/photo-1559234938-b60fff04894d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1572567981653-ce74f7356946?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",

  "https://images.unsplash.com/photo-1542622475-904e18612fa1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",

  "https://plus.unsplash.com/premium_photo-1675368994978-0c7c12d7d4bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",


  "https://images.unsplash.com/photo-1575267685970-7fbabf6ed7b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",


  "https://images.unsplash.com/photo-1551727028-e050e6ed2f62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",


  "https://images.unsplash.com/photo-1526795443948-005b48ce4791?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",


  "https://images.unsplash.com/photo-1575267685965-20e1354939e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",


  "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",


  "https://images.unsplash.com/photo-1514415008039-efa173293080?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  
];


export default function Gallery() {
  const { theme } = useTheme();
  
  return (
    <>
    <h2 className="heading my-2">
  <div className="codebird head-txt">
  <h1 className="text-brown main-head service-head">
        <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"700" }}>
          OU
          <span className="text-warn" style={{ color: "#EEE" }}>
             R{" "}G
          </span>                 
          AL
          <span className="text-warn" style={{ color: "#EEE" }}>
            L
          </span> 
        <span className="text-warnin" style={{ color: "#15A6BA" }}>
         ERY
        </span>
        </span>
      </h1>
  </div>
</h2>
    <div className="gallery-container">
      {/* <h2 className="gallery-title">Our Gallery</h2> */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
