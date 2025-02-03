import React from "react";
import { Link } from "react-router-dom";

function Clients() {
    return (
        <div>
        <h2>Clients </h2>
        <ul>
        <li>
            <Link to="/pages/Clients/components/Facebook">Facebook</Link>
        </li>

        <li>
            <Link to="/pages/Clients/components/Google">Google</Link>
        </li>

        <li>
            <Link to="/pages/Clients/components/Netflix">Netflix</Link>
        </li>
        </ul>

        </div>
    );
}

export default Clients;