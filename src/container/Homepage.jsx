import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap'

import Main from '../pages/Index'
import Navbar from '../components/Navbar';

function Homepage() {
  return (
    <Router>
      <div className="tw-bg-primary">
        <Navbar />
        <Container>
          <Route path="/" exact component={ Main }></Route>
        </Container>
      </div>
    </Router>
  );
}

export default Homepage;

