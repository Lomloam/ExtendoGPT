import React from "react";
import "./content.css";


const ContentScript = ({ onToggle, text}) => {
  return (
    <div className="notification">
      <button onClick={onToggle} className="close-button">&#10005;</button>
      <br></br>
      {text}
      
    </div>
  );
};

export default ContentScript;
