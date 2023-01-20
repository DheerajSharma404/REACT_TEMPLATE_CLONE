import React from "react";

//Styles
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id='pricing'>
      <div className='pricing__row'>
        <p className=' purple work__text'>PRICING</p>
        <h2 className='work__heading'>
          Reasonable & Flexible <span className='purple'>Plans.</span>
        </h2>
        <p className='work__subtext pricing__subtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='pricing__cards'>
          <div className='card card1'>
            <div className='plans__div1'>
              <span className='name'>PERSONAL</span>
              <span className='price'>$17.99</span>
              <span className='duration'>MONTHLY</span>
            </div>
            <div className='plans__div2'>
              <span className='feature main-feature'>For Individual</span>
              <span className='feature'>30 Templates</span>
              <span className='feature'>7 Langding Pages</span>
              <span className='feature'>12 Internal Pages</span>
              <span className='feature'>Basic Assistance</span>
            </div>
            <div className='plans__div3'>
              <button className='btn plans__btn1'>BUY NOW</button>
            </div>
          </div>
          <div className='card card2'>
            <div className='plans__div1'>
              <span className='name'>BUSINESS</span>
              <span className='price'>$37.99</span>
              <span className='duration'>MONTHLY</span>
            </div>
            <div className='plans__div2'>
              <span className='feature main-feature'>For Small Businesses</span>
              <span className='feature'>60 Templates</span>
              <span className='feature'>15 Langding Pages</span>
              <span className='feature'>22 Internal Pages</span>
              <span className='feature'>Priority Assistance</span>
            </div>
            <div className='plans__div3'>
              <button className='btn plans__btn2'>BUY NOW</button>
            </div>
          </div>
          <div className='card card3'>
            <div className='plans__div1'>
              <span className='name'>ENTERPRISE</span>
              <span className='price'>$57.99</span>
              <span className='duration'>MONTHLY</span>
            </div>
            <div className='plans__div2'>
              <span className='feature main-feature'>For Large Companies</span>
              <span className='feature'>90 Templates</span>
              <span className='feature'>27 Langding Pages</span>
              <span className='feature'>37 Internal Pages</span>
              <span className='feature'>Personal Assistance</span>
            </div>
            <div className='plans__div3'>
              <button className='btn plans__btn3'>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
