import Reat from "react";

//styles
import "./Hero.css";

const Hero = () => {
  return (
    <section id='hero'>
      <div className='container'>
        <div className='row'>
          <div className='hero__left'>
            <h1 className='hero__text'>
              Beautiful React Templates <span className='purple'>for you.</span>
            </h1>
            <p className='hero__subtext'>
              Our templates are easy to setup, understand and customize. Fully
              modular components with a variety of pages and components.
            </p>
            <div className='hero__input'>
              <input
                type='text'
                className='hero__input--field'
                placeholder='Your E-mail Address'
              />
              <button className='hero__btn'>Get Started</button>
            </div>
            <div className='hero__credit'>
              <p>OUR TRUSTED CUSTOMERS</p>
              <img
                src='./src/assets/customers-logo.png'
                alt=''
                className='hero__credit--img'
              />
            </div>
          </div>
          <div className='hero__right'>
            <img
              src='./src/assets/design-illustration-2.6da6a00b20c07c4a9b65d1870679e1b8.svg'
              alt=''
              className='hero__image'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
