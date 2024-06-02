import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/what-is-the-problem" className="nav-link px-2 text-muted">
              What is the problem?
            </a>
          </li>
          <li className="nav-item">
            <a href="/country-data" className="nav-link px-2 text-muted">
              Country Data
            </a>
          </li>
          <li className="nav-item">
            <a href="/what-are-we-doing" className="nav-link px-2 text-muted">
              What are we doing about it?
            </a>
          </li>
          <li className="nav-item">
            <a href="/get-involved" className="nav-link px-2 text-muted">
              Get involved
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2024 Plastic Recycling R Us, Inc</p>
      </footer>
    </div>

  );
};

export default Footer;