import React from 'react';
import Header from "../Components/Header";
import Card from '../Components/Card';

const hobbies = [
  {title: "3D-printing", id:1 },
  {title: "3D-modelling", id:2 },
  {title: "workingout", id:3 },
  {title: "gaming", id:4 },
];

export default function Hobbies(){
  return (
    <div>
      <Header />
      <div className="Hobbies">
      <h1>Hobbies</h1>
      <Card title={hobbies[0].title} description="asdfasdjfiwejfoweifjo"/>
      </div>
      
  </div>
  );
      
}


