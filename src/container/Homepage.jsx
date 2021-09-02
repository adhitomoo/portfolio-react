import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';

import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

function Homepage() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Homepage;

