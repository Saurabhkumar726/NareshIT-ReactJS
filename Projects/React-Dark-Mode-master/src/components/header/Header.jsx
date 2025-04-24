import React from "react";
import "./header.css";
import Themetoggle from "../toggle-theme";
import phone from "../../assets/image-1.png";
import lightimage from "../../assets/pietro-piovesan-9UR3Zafm328-unsplash.png";
const Header = () => {
  return (
    <>
      <header className="container">
        <div className="header-left">
          <div className="header-caption">
            <h1>Style That Glows in the Dark</h1>
          </div>
          <Themetoggle />
          <div className="product-info">
            <h4>
            Dark mode isn’t just a trend — it’s a smarter way to interact with your devices. 
            Our application brings modern aesthetics together with powerful features, reducing eye strain, 
            saving battery life, and giving you full control over your finances. Behind every pixel is an intention: focus, 
            flow, and functionality — without the glare.
            </h4>
            <h4>
            We stripped away the noise to let your tasks shine. DarkPay offers a distraction-free environment designed for power 
            users and casual users alike. Every screen, every animation, every interaction — refined with precision and purpose.
            </h4>
          </div>
        </div>
        <div className="header-right">
          <div className="image-container">
            <img src={phone} alt="image here" srcSet="" />
          </div>
        </div>
        <div className="background-text">
          <h1>
          Dark <br /> <span className="devstyle">Matter</span>
          </h1>
        </div>
        <div className="light-image">
          <img src={lightimage} alt="img" />
        </div>
      </header>
    </>
  );
};

export default Header;
