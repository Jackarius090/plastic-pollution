
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Plastic Pollution Guide</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/what-is-the-problem">What is the problem?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/country-data">Country Data</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/what-are-we-doing">What are we doing about it?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get-involved">Get Involved</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
