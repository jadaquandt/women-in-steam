import React from "react";
import CardItem from "./CardItem";
import science from "../../images/science-in-hd-M96M9iBo69w-unsplash.jpg";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these awesome Women in Tech</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={science}
              text="Women of Science"
              label="Science"
              path="/science"
            />
            <CardItem
              src={science}
              text="Women of Technology"
              label="Tech"
              path="/technology"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={science}
              text="Women of Engineering"
              label="Engineering"
              path="/engineering"
            />
            <CardItem
              src={science}
              text="Women of Arts"
              label="Arts"
              path="/arts"
            />
            <CardItem
              src={science}
              text="Women of Math"
              label="Math"
              path="/math"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
