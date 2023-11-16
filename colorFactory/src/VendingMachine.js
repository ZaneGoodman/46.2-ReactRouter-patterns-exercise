import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1> Vending Machine </h1>
      <div>
        <ul>
          <li>
            <Link exact to="/chip">
              Chip
            </Link>
          </li>
          <li>
            <Link exact to="/hershy">
              hershy
            </Link>
          </li>
          <li>
            <Link exact to="/starburst">
              starburst
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VendingMachine;
