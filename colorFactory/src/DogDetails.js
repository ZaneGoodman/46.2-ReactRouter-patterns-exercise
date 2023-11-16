import React from "react";
import { useParams, Redirect } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const [dog] = dogs.filter((dog) => name === dog.name);
  if (!dog) return <Redirect to="/dogs/" />;

  return (
    <>
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
    </>
  );
};

export default DogDetails;
