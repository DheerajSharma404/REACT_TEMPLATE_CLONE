import React from "react";
import WorkStepList from "./WorkStepList";

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
      <div className='work__row'>
        <div className='work__leftContainer'>
          <img
            className='work__img2'
            src='./src/assets/hero-screen2.png'
            alt=''
          />
        </div>
        <div className='work__rightContainer'>
          <p className=' purple work__text'>STEPS</p>
          <h2 className='work__heading'>
            Easy to <span className='purple'>Get Started.</span>
          </h2>
          <div className='work__listOfSteps'>
            <WorkStepList
              number='01'
              title='Register'
              subtext='Create an account with us using Google or Facebook.'
            />
            <WorkStepList
              number='02'
              title='Downloads'
              subtext='Browse and Download the template that you like from the marketplace.'
            />
            <WorkStepList
              number='03'
              title='Run'
              subtext='Follow the instructions to setup and customize the template to your needs.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
