import React from 'react';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Unleash Your Creativity: Design with AI and 3D Visualization</h1>
      <p>Welcome to InfinityAI, where your imagination meets reality. Our innovative platform uses advanced AI and 3D visualization technology to turn your ideas into tangible designs. From fashion to furniture, toys to tools, simply describe what you want and watch as our AI crafts it in stunning 3D. Begin your journey with us today and step into the new era of design and e-commerce.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button" onClick={() => window.location.href='http://127.0.0.1:5173/'}>Get Started</button>
      </div>
    </div>
  </div>
);

export default Header;
