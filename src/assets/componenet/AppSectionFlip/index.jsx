import React from "react";
import "./style.css";

function AppSection({ img2, tag2, title2, subtitle2 }) {
  return (
    <div className="createAccountFlip">
      <img src={img2} alt="" />
      <div className="rightApp">
        <p>{tag2}</p>
        <h6>{title2}</h6>
        <p>{subtitle2}</p>
      </div>
    </div>
  );
}

export default AppSection;
