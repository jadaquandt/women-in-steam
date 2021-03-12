import React, { useEffect, useState } from "react";
import "../../App.css";
import CardDetail from "../card/CardDetail";
// import womenInSTEAM from "../../women.js";

function Science() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("womenOfScience.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="science">WOMEN OF SCIENCE</h1>
      <div className="cards">
        <h1>Science</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {data &&
                data.length > 0 &&
                data.map((item) => (
                  <div key={item.science_id}>
                    <CardDetail
                      image={item.image}
                      STEAMletter={item.STEAMletter}
                      wikiURL={item.wikiURL}
                      name={item.name}
                      headline={item.headline}
                      bio={item.bio}
                    />
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Science;
