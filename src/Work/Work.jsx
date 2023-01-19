import React from "react";

//Style
import "./Work.css";

const Work = () => {
  return (
    <section id='work'>
      <div className='work__row'>
        <div className='work__leftContainer'>
          <p className=' purple work__text'>QUALLITY WORK</p>
          <h2 className='work__heading'>
            Designed & Developed by{" "}
            <span className='purple'>Professionals.</span>
          </h2>
          <p className='work__subtext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className='work__btn'>Get Started</button>
        </div>
        <div className='work__rightContainer'>
          <img
            className='work__img'
            src='./src/assets/hero-screen.png'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};
export default Work;
