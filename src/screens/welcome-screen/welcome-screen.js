import React from "react";
import { CarouselComponent } from "../../components";
import Logo from "./assets/nccg_logo.png";
import UsaLogo from "./assets/usa.png";
import SpainLogo from "./assets/spain.png";
import ChinaLogo from "./assets/china.png";

import "./assets/style.css";
export const WelcomeScreen = () => {
  const handleBackgroundPress = (event) => {
    console.log("Background press");
  };
  const handleLanguageButton = (event) => {
    event.stopPropagation(); //The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. If you want to stop those behaviors, see the preventDefault() method.
    console.log("Button press");
  };
  return (
    <div
      id="welcome-screen-container"
      value={23}
      onClick={(e) => {
        handleBackgroundPress(e);
      }}
    >
      <CarouselComponent />
      <img
        className="main-logo"
        src={Logo}
        alt="North Central Consulting Group Logo"
      />
      <h1 className="message1-text">Touch screen to begin</h1>
      {/* <div className="start-button">
        <p className="start-button-text">START</p>
      </div> */}
      <div className="select-language-container">
        <div
          onClick={(e) => {
            handleLanguageButton(e);
          }}
          id="english-button"
        >
          <img src={UsaLogo} alt="usa_flag" className="language-flag-button" />
          <p className="language-button-text">English</p>
        </div>
        <div
          onClick={(e) => {
            handleLanguageButton(e);
          }}
          id="spanish-button"
        >
          <img
            src={SpainLogo}
            alt="spain_flag"
            className="language-flag-button"
          />
          <p className="language-button-text">Español</p>
        </div>
        <div
          onClick={(e) => {
            handleLanguageButton(e);
          }}
          id="china-button"
        >
          <img
            src={ChinaLogo}
            alt="china_flag"
            className="language-flag-button"
          />
          <p className="language-button-text">中国人</p>
        </div>
      </div>
    </div>
  );
};
