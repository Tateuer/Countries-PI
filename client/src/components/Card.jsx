import React from "react";

export default function Card({ name, flag, continent }) {
  return (
    <div>
      <h3 className="nameCard">{name}</h3>
      <h5 className="continentCard">{continent}</h5>
      <img className="efectoFlag" src={flag} alt="main-img"></img>
    </div>
  );
}
