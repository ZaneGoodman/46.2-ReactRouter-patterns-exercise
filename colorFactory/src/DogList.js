import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <>
      {dogs.map((dog) => (
        <div>
          <h1>{dog.name}</h1>
          <h3>Age: {dog.age}</h3>
          <div>
            <h4>Facts</h4>
            <ul>
              {dog.facts.map((fact) => (
                <li>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default DogList;
