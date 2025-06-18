import React from "react";
import "./style.css";

function AppSection({ img, tag, title, subtitle }) {
  return (
    <div className="createAccount">
      <img src={img} alt="" />
      <div className="leftApp">
        <p>{tag}</p>
        <h6>{title}</h6>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default AppSection;
