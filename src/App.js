
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatIsTheProblem from './pages/WhatIsTheProblem';
import CountryData from './pages/CountryData';
import WhatAreWeDoing from './pages/WhatAreWeDoing';
import GetInvolved from './pages/GetInvolved';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route path="/what-is-the-problem" component={WhatIsTheProblem} />
            <Route path="/country-data" component={CountryData} />
            <Route path="/what-are-we-doing" component={WhatAreWeDoing} />
            <Route path="/get-involved" component={GetInvolved} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

