import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatInfinityAI = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Infinity AI" text="We believe in empowering your creativity and turning your imagination into reality. Our platform seamlessly combines AI and 3D visualization, providing you an intuitive and interactive design tool. Step into the future with us, where your ideas are brought to life in three dimensions." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="3D Customization" text="Experience the power of our AI in generating stunning and interactive 3D models. From a simple description, create anything your mind can conceive." />
      <Feature title="AI-Powered Design" text="Harness the potential of our advanced AI that interprets your words and transforms them into unique designs. It's like having your personal digital artist." />
      <Feature title="Wide Application Range" text="From fashion and furniture to toys and tools, our platform accommodates a wide spectrum of products. Your imagination is the only limit." />
    </div>
  </div>
);

export default WhatInfinityAI;
