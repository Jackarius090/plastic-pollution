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
      <h1>Country Data</h1>
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
        <div className='container row text-center'>
          <div className='col'>
            {figures}
          </div>
        </div>
      </div>
      <div id='data-info-div' className='container row text-center'>
        <div id='data-info' className='d-inline-flex p-2 col'>
          The data was exported in csv format from the different databases and manually filtered when necessary, using Google Sheets. Different Python scripts were used to load and clean the data, depending on what kind of analysis and visualisation was needed.<br></br><br></br> The packages used were mainly pandas for the loading, cleaning and handling the data in general, then matplotlib and seaborn for the data visualisation. The geopandas package was also used to visualise the data for mismanaged plastic waste on a map. <br></br><br></br>The graphs were then saved as svg files, to ensure a proper visualisation on the homepage.
        </div>
        <div id='data-info' className='d-inline-flex p-2 col'>
          Publicly available data about plastic production and plastic waste was found from the following sources:
          <br></br><br></br>
          •	OECD for the data related to countries that are part of the organisation and for the global plastic production data
          <br></br><br></br>
          •	EPA.gov for the data related to the USA
          <br></br><br></br>
          •	Meijer et al. (2021). More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean. Science Advances. https://doi.org/10.1126/sciadv.aaz5803
          <br></br><br></br>
          •	Geyer et al., Production, use, and fate of all plastics ever made. Sci. Adv.3, e1700782(2017). DOI:10.1126/sciadv.1700782

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