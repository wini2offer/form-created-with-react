import React from "react";
import "../style/card.css";

const Card = ({ picture, name, description, price }) => {
  return (
    <div className="card" >
      <img src={picture} className="card-pix" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="text">{price}</p>
        <a href="#" className="btn btn-primary">
          <button className="button">Add to cart</button> 
        </a>
      </div>
    </div>
  );
};

export default Card;
