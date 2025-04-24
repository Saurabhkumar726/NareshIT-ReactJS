import React from "react";
import "./nav.css";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="nav-container">
          <div className="menu-list">
            <h4 style={{ fontWeight: "600" }}>Home</h4>
            <h4>About</h4>
            <h4>Latest</h4>
            <h4>How it works</h4>
            <div className="menu-icon">
              <AiOutlineMenu />
            </div>
          </div>
          <div className="logo">
            <h2>
            Dark<span className="danger">Matter</span>
            </h2>
          </div>
          <div className="app-links">

            <div>
              <h4>
                <BsGooglePlay />
                <span>Play Store</span>
              </h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
