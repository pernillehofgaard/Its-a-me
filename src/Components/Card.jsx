import React from "react";
import './Card.css';

function Card(props){
return(
  <div className="Card">
    <div className="Top">
      <h2>{props.title}</h2>
      <h5>{props.timePeriod}</h5>
    </div>
    <div className="Bottom">
      <p>{props.description}</p>
      <div className="Card-img">
        <img src={props.imgSrc}/>
      </div>
    </div>
  </div>
);

}

export default Card;