import React from "react";
import { Fragment } from "react";
import "./style.css";
import Button from "../../componenet/Button/button";

function OrderSection() {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="wrapper">
            <p>Food app</p>
            <h3>Why stay hungry when you can order form Bella Onojie</h3>
            <p>Download the bella onoje’s food app now on</p>
            <div className="btnDiv">
              <Button text={"Playstore"} />
              <Button text={"App store"} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default OrderSection;
