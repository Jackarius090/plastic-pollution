import React from 'react';

const PlasticInfo = () => {
  return (
    <div className='container'>
      <h1 className='mb-4'>What is the problem?</h1>
      <div className="row">
        <h3 id="text1" className="col-12 text-center text-wrap col-md-6">
          430 million tonnes of plastic is produced every year
        </h3>
        <img
          className="col-6 text-center text-wrap col-sm-12 my-4"
          id="image1"
          src="https://cdn.pixabay.com/photo/2020/03/11/02/43/ocean-4920792_1280.jpg"
        />
      </div>
      <div className="row">
        <img
          className="col-6 text-center text-wrap mb-4"
          id="image1"
          src="https://images.unsplash.com/photo-1495556650867-99590cea3657?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <h3 id="text1" className="col-12 text-center text-wrap col-md-6">
          11 million tonnes of plastic enters the ocean every year
        </h3>
      </div>
      <div className="accordion mx-auto mt-4" id="accordionPanelsStayOpenExample">
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
              Plastic pollution in numbers
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className='container'>
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 text-center p-4">
                  8 million pieces of plastic pollution make their way into the ocean
                  every day. (OSPAR, 2009) 12 million tonnes of plastic is dumped into
                  the ocean every year (Eunomia, 2016) 80% of all studied marine
                  debris is plastic. (IUCN, 2020)

                  <br></br><br></br>

                  5.25 trillion macro and
                  microplastics may now be floating in the open ocean, weighing up to
                  269,000 tonnes. (Eriksen, 2014) 100,000 marine mammals and turtles
                  and 1 million sea birds are killed by marine plastic pollution every
                  year. (UK Government, 2018)
                </div>
                <img
                  className="col-12 col-lg-6 text-center pb-3 pt-lg-3"
                  id="image1"
                  src="https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
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
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              How much plastic pollution is there?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className='container'>
              <div className="row align-items-center">
                <img
                  className="col-12 col-lg-6 text-center py-3"
                  id="image1"
                  src="https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                />
                <div className="col-12 col-lg-6 text-center p-4">
                  12 million tonnes of plastic finds its way into the ocean every
                  single year. 9.5 million tonnes of this enters the ocean from the
                  land with 1.75 tonnes being chucked into the sea directly from the
                  fishing a shipping industry. There are approximately 51 trillion
                  microscopic pieces of plastic, weighing 269,000 tons. That's about
                  the same as 1,345 adult blue whales. And 500 times the number of
                  stars in our galaxy.
                </div>
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
              How long does plastic last?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Plastic is strong, flexible and durable. The same qualities that make
              it so useful also mean it never really breaks down. A plastic bottle
              can last for 450 years in the marine environment, slowly fragmenting
              into smaller and smaller pieces which never truly disappear. Every
              piece of plastic ever produced is still with us in some form. And
              we’re using more plastic than ever before.
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
              What harm does it do to the environment?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              For wildlife such as fish, dolphins, seabirds and seals it can be
              fatal: they can become entangled, or mistake plastic for food. From
              the dead albatross in the Midway Atoll, stomachs packed full of
              plastic waste, to the whale found malnourished and dying off the coast
              of Norway with 30 plastic bags and masses of plastic packaging in its
              guts, too many incidents illustrate this problem with searing clarity.
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
              Is plastic all bad?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Plastic can be incredibly useful. Diabetics use it for syringes,
              arthritic patients rely on it for hip replacements, and construction
              workers wear it to protect their heads. Without it, we wouldn’t have
              computers, mobile phones or cars. The big problem? Single-use plastics
              and the eye-watering quantities we consume. You might use a plastic
              bag for just 15 minutes, but it could take 100-300 years to fragment.
            </div>
          </div>
        </div>
      </div>
      <div className='py-4 px-lg-5 mx-lg-5'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
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
                className="d-block img-fluid carousel"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block img-fluid carousel"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 />
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block img-fluid carousel"
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
    </div>
  );

}

export default PlasticInfo;