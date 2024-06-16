import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer';
import WhatIsTheProblem from './pages/WhatIsTheProblem';
import CountryData from './pages/CountryData';
import WhatAreWeDoing from './pages/WhatAreWeDoing';
import GetInvolved from './pages/GetInvolved';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/what-is-the-problem" element={<WhatIsTheProblem />} />
          <Route path="/country-data" element={<CountryData />} />
          <Route path="/what-are-we-doing" element={<WhatAreWeDoing />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
