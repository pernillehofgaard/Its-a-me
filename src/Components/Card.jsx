import React from "react";
import './Card.css';

function Card(props){
return(
  <div className="Card">
    <div className="top">
      <h2>{props.title}</h2>
    </div>
    <div className="bottom">
      <p>{props.description}</p>
      <div className="card-img">
        <img src={props.imgSrc}/>
      </div>
    </div>
  </div>
);

}

export default Card;