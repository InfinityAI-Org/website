import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Unleash Your Creativity</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Dive into the realm of infinite possibilities with our AI-powered 3D design platform. From intricate fashion designs to bespoke furniture pieces, there are no limits to what you can create. Experience the joy of seeing your imagination come to life in three dimensions, disrupting conventional design boundaries.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
