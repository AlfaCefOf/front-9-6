import React from "react";
import "./style.css";
import { Fragment } from "react";
import Logo from "../../../assets/images/logo.png";
export function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <nav>
            <div className="nav-left">
              <img src={Logo} alt="" />
            </div>
            <div className="nav-right">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Faq</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}
