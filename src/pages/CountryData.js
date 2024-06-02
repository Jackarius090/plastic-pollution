import React from 'react';
import { useState } from 'react';
import Global from '../countrydata/Global';
import Denmark from '../countrydata/Denmark';
import Italy from '../countrydata/Italy';
import Uk from '../countrydata/Uk';
import Sweden from '../countrydata/Sweden';
import Germany from '../countrydata/Germany';
import France from '../countrydata/France';
import Usa from '../countrydata/Usa';


const CountryData = () => {

  let [figures, setFigures] = useState(< Global />)

  const globalClick = () => {
    setFigures(< Global />)
  }

  const denmarkClick = () => {
    setFigures(< Denmark />)
  }

  const italyClick = () => {
    setFigures(< Italy />)
  }

  const swedenClick = () => {
    setFigures(< Sweden />)
  }

  const ukClick = () => {
    setFigures(< Uk />)
  }

  const germanyClick = () => {
    setFigures(< Germany />)
  }

  const franceClick = () => {
    setFigures(< France />)
  }

  const usaClick = () => {
    setFigures(< Usa />)
  }

  return (
    <div>
      <div id='datablock' className='justify-content-center align'
      >
        <nav id='dataNavBar' className="navbar navbar-expand-lg">
          <div id='dataNavBar' className="container-fluid">
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
                  <a id='dataNavBarButtons'
                    role="button"
                    onClick={globalClick}
                    className="nav-link active"
                  >
                    Global
                  </a>
                </li>
                <li className="nav-item">
                  <a id='dataNavBarButtons'
                    role="button"
                    onClick={denmarkClick}
                    className="nav-link active">
                    Denmark
                  </a>
                </li>
                <li className="nav-item">
                  <a id='dataNavBarButtons'
                    role="button"
                    onClick={italyClick}
                    className="nav-link active">
                    Italy
                  </a>
                </li>
                <li role="button"
                  className="nav-item">
                  <a id='dataNavBarButtons'
                    onClick={swedenClick}
                    className="nav-link active">
                    Sweden
                  </a>
                </li>
                <li role="button"
                  className="nav-item">
                  <a id='dataNavBarButtons'
                    onClick={ukClick}
                    className="nav-link active">
                    UK
                  </a>
                </li>
                <li role="button"
                  className="nav-item">
                  <a id='dataNavBarButtons'
                    onClick={germanyClick}
                    className="nav-link active">
                    Germany
                  </a>
                </li>
                <li role="button"
                  className="nav-item">
                  <a id='dataNavBarButtons'
                    onClick={franceClick}
                    className="nav-link active">
                    France
                  </a>
                </li>
                <li role="button"
                  className="nav-item">
                  <a id='dataNavBarButtons'
                    onClick={usaClick}
                    className="nav-link active">
                    USA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {figures}
      </div>

      <div className="accordion mx-auto p-5" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What this data means
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="d-flex justify-content-center">
              <div className="d-inline-flex p-2 text-center text-wrap align-items-center">
                Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
                Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
                Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
                Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
                Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
                Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
                Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
                Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
                Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
                Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
                Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
                Datadatadata.
              </div>
              <img
                className="d-inline-flex p-2"
                id="image1"
                src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=2768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Where this data comes from
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="d-flex justify-content-center">
              <img
                className="d-inline-flex p-2"
                id="image1"
                src="https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
              />
              <div className="d-inline-flex p-2 text-center text-wrap align-items-center">
                Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
                Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
                Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
                Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
                Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
                Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
                Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
                Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
                Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
                Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
                Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
                Datadatadata.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              How these graphs were made
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              More data stuff
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              blah blah blah
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata. Datadatadata Datadatadata Datadatadata Datadatadata.
              Datadatadata Datadatadata Datadatadata Datadatadata. Datadatadata
              Datadatadata Datadatadata Datadatadata. Datadatadata Datadatadata
              Datadatadata Datadatadata. Datadatadata Datadatadata Datadatadata
              Datadatadata.
            </div>
          </div>
        </div>
      </div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block mx-auto carousel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block mx-auto carousel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 />
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block mx-auto carousel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CountryData;