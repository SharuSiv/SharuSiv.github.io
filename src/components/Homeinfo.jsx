import { render } from '@react-three/fiber';
import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Sharujan</span> 👋🏾
      <br />
      An Ongoing Software Engineering Student Enrolled In Ontario Tech
      University{' '}
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked With Many Companies And Picked Up Many Skills Along The Way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Completed Impactful Projects Using Languages Learned Throughout My Career. Check Out My Github!"
      link="/Projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking To Get A Project Done? Need A Developer?"
      link="/contact"
      btnText="Contact Me"
    />
  ),
};

export const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
