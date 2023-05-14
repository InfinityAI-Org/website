import React from 'react';

import { Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA } from './components';
import infinitybg from './infinitybg.jpg';
import './App.css';

const App = () => (
  <div className="App">
    <div className="background-image">
      <img src={infinitybg} alt="infinity-bg" />
    </div>
    <div className="gradient__bg">
      {/* <Navbar /> */}
      <Header />
    </div>

    {/* <Brand /> */}
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />

    {/* <Blog /> */}
    {/* <Footer /> */}
  </div>
);
export default App;
