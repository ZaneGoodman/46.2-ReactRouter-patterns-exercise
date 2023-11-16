import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
const Nav = ({ dogs }) => {
  return (
    <>
      {dogs.map((dog) => (
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      ))}
    </>
  );
};

export default Nav;
