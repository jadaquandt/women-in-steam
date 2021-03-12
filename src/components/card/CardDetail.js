import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardDetail(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" url={props.wikiURL}>
          <figure
            className="cards__item__pic-wrap"
            data-category={props.STEAM_letter}
          >
            <img
              src={props.image}
              alt="woman in steam"
              className="cards__item__img"
            />
          </figure>
          <div className="card__item__info">
            <h5 className="cards__item__text">{props.name}</h5>
            <p className="cards__item__text">{props.headline}</p>
            <p className="cards__item__text">{props.bio}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardDetail;
