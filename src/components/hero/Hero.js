import React from "react";
import { Button } from "../button/Button";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <video src="/public/production_ID_4426380.mp4" autoPlay loop muted />
      <h1>Women in STEAM</h1>
      <p>Science.Technology.Engineering.Arts.Math</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Get Started
        </Button> */}
      </div>
    </div>
  );
}
