import React from "react";

//Styles

import "./FeatureCard.css";

const FeatureCard = ({ icon, title, subtext }) => {
  return (
    <div className='feature__list' id={`${title}`}>
      <div className='feature__list--icon'>
        <img src={`${icon}`} alt='' className='card--img' />
      </div>
      <div className='feature__list--text'>
        <p className='title'>{`${title}`}</p>
        <p className='subtext'>{`${subtext}`}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
