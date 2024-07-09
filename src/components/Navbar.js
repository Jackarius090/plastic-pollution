import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Plastic Recycling Info Page
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active mx-2"
                aria-current="page"
                to="/what-is-the-problem"
              >
                What is the problem?
              </Link>
            </li>
            <li className="nav-item">
              <div id="Countrydata">
                <Link className="nav-link active mx-2" to="/country-data">
                  Country Data
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-2" to="/what-are-we-doing">
                What are we doing about it?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-2" to="/get-involved">
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
