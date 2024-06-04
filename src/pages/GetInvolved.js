import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import reducePlasticUseImage from '../images/reduce-your-plastic-use.jpg';
import participateInCleanUpsImage from '../images/participate-in-cleanups.jpg';
import getInImage1 from '../images/getIn-image1.jpg';
import getInImage2 from '../images/getIn-image2.jpg';
import getInImage3 from '../images/getIn-image3.jpg';
import '../GetInvolved.css';

const GetInvolved = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">
      <Typewriter
          options={{
            strings: ['Get Involved'],
            autoStart: true,
            loop: true,
          }}
        />
        </h1>
      <p className="text-center mb-5">
        This page provides ways for you to get involved in combating plastic pollution. Every action counts!
      </p>

      <div className="d-flex justify-content-center mb-4">
        <p id="text1" className="d-inline-flex p-2 text-center text-wrap">
          Reduce your plastic use
        </p>
        <img
          className="d-inline-flex p-2"
          id="image1"
          src={reducePlasticUseImage}
          alt="Reduce plastic use"
        />
      </div>

      <div className="d-flex justify-content-center mb-4">
        <img
          className="d-inline-flex p-2"
          id="image1"
          src= {participateInCleanUpsImage}
          alt="Participate in clean-ups"
        />
        <p id="text1" className="d-inline-flex p-2 text-center text-wrap">
          Participate in clean-ups
        </p>
      </div>

      <div className="accordion mx-auto p-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Reduce Plastic Use
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Start by reducing your use of single-use plastics such as plastic bags, straws, and bottles. Opt for reusable alternatives. <a href="https://www.wwf.org.uk/thingsyoucando" target="_blank" rel="noopener noreferrer">Learn more</a>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Participate in Clean-Ups
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              Join local beach and river clean-up events. These efforts help remove plastics from our oceans and waterways. <a href="https://oceanconservancy.org/trash-free-seas/international-coastal-cleanup/" target="_blank" rel="noopener noreferrer">Find events</a>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Support Legislation
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
              Advocate for policies that reduce plastic production and waste. Support organizations working on legislative changes. <a href="https://www.plasticpollutioncoalition.org/" target="_blank" rel="noopener noreferrer">Get involved</a>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Educate Others
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse">
            <div className="accordion-body">
              Spread awareness about plastic pollution by sharing information and educating your community about sustainable practices. <a href="https://www.earthday.org/act-take-action/" target="_blank" rel="noopener noreferrer">Spread the word</a>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Support Sustainable Brands
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse">
            <div className="accordion-body">
              Choose to buy from brands that prioritize sustainability and use minimal or recyclable packaging. <a href="https://bcorporation.net/" target="_blank" rel="noopener noreferrer">Explore brands</a>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Donate
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse">
            <div className="accordion-body">
              Consider donating to organizations dedicated to fighting plastic pollution and protecting marine life. <a href="https://www.oceanconservancy.org/" target="_blank" rel="noopener noreferrer">Donate now</a>.
            </div>
          </div>
        </div>
      </div>

      <div id="carouselExample" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src= {getInImage1} className="d-block w-100 carousel" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src= {getInImage2} className="d-block w-100 carousel" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src= {getInImage3} className="d-block w-100 carousel" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default GetInvolved;
