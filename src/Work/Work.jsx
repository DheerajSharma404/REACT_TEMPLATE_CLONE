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

      <div className='work__row'>
        <div className='work__leftContainer'>
          <p className=' purple work__text'>VALUES</p>
          <h2 className='work__heading'>
            We Always Abide by Our <span className='purple'>Principles.</span>
          </h2>
          <p className='work__subtext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className='work__cards'>
            <div className='left__card'>
              <div className='left__card--div'>
                <img
                  src='./src/assets/fast-icon.svg'
                  alt=''
                  className='card--img'
                />
                <p className='title'>Affordable</p>
              </div>
              <p className='subtext subtext__ext'>
                We promise to offer you the best rate we can - at par with the
                industry standard.
              </p>
            </div>
            <div className='right__card'>
              <div className='right__card--div'>
                <img
                  src='./src/assets/fast-icon.svg'
                  alt=''
                  className='card--img'
                />
                <p className='title'>Professionalism</p>
              </div>
              <p className='subtext subtext__ext'>
                We assure you that our templates are designed and created by
                professional designers.
              </p>
            </div>
          </div>
          <button className='work__btn'>Learn More</button>
        </div>
        <div className='work__rightContainer'>
          <img
            className='work__img3'
            src='./src/assets/value-section.svg'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};
export default Work;
