import React from "react";
import { Link } from "react-router-dom";

function Clients() {
  return (
    <div>
      <h2>Clients</h2>
      <ul>
        <li>
          <Link to="/clients/facebook">Facebook</Link>
        </li>
        <li>
          <Link to="/clients/google">Google</Link>
        </li>
        <li>
          <Link to="/clients/netflix">Netflix</Link>
        </li>
      </ul>
    </div>
  );
}

export default Clients;