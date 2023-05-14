import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Transforming Design Conventions Instantly',
    text: 'With our innovative fusion of AI and 3D technology, we are redefining what is possible in the realm of design. Embrace the freedom to create, explore, and visualize your ideas in a way that was once only imaginable.',
  },
  {
    title: 'Empowering Your Creative Journey',
    text: 'Your ideas deserve to be brought to life, and our platform is designed to do just that. From conception to visualization, every step of your creative journey is empowered by our intuitive and intelligent design tools.',
  },
  {
    title: 'Your Vision, Our Mission',
    text: 'We exist to amplify your creativity and bring your visions to reality. Whether it is a bespoke piece of furniture or a unique toy, your imagination is the driving force behind our AI-powered platform.',
  },
  {
    title: 'Redefining the Design Landscape',
    text: 'With InfinityAI, we are not just embracing the future of design - we are creating it. Step into a world where your creative boundaries are expanded, and your designs come to life in vivid 3D.',
  },
];
const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future of Design is Here, and It is Yours to Command. Embrace Tomorrow with Infinity AI. Make it Possible.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
