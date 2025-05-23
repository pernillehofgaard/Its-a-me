import React from 'react';
import Header from "../Components/Header";
import Card from '../Components/Card';
import hobbies from '../Info files/hobbiesInfo';
import './Hobbies.css';

export default function Hobbies(){
  return (
    <div className="hobbies">
      <Header />
      <div className="hobbies-title">
        <h1>Hobbies</h1>
      </div>
        {hobbies.map((info) =>(
            <Card title={info.title} description={info.description}/>

        ))} 
    </div>
  );
      
}


