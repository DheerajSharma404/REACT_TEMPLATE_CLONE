import Reat from "react";

//Styles
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
        <div className='footer__menu'>
          <div className='col'>
            <span className='footer__title'>MAIN</span>
            <span className='footer__subtext'>Blogs</span>
            <span className='footer__subtext'>FAQs</span>
            <span className='footer__subtext'>Support</span>
            <span className='footer__subtext'>About Us</span>
          </div>
          <div className='col'>
            <span className='footer__title'>PRODUCT</span>
            <span className='footer__subtext'>Log In</span>
            <span className='footer__subtext'>Personal</span>
            <span className='footer__subtext'>Business</span>
            <span className='footer__subtext'>Team</span>
          </div>
          <div className='col'>
            <span className='footer__title'>PRESS</span>
            <span className='footer__subtext'>Logos</span>
            <span className='footer__subtext'>Events</span>
            <span className='footer__subtext'>Stories</span>
            <span className='footer__subtext'>Office</span>
          </div>
          <div className='col'>
            <span className='footer__title'>TEAM</span>
            <span className='footer__subtext'>Career</span>
            <span className='footer__subtext'>Culture</span>
            <span className='footer__subtext'>Onboarding</span>
          </div>
          <div className='col'>
            <span className='footer__title'>LEGAL</span>
            <span className='footer__subtext'>GDPR</span>
            <span className='footer__subtext'>Privacy Policy</span>
            <span className='footer__subtext'>Terms of Service</span>
            <span className='footer__subtext'>Disclaimer</span>
          </div>
        </div>
        <div className='footer__seperator'>
          <hr />
        </div>
        <div className='footer__end'>
          <figure className='nav__logo__container'>
            <img
              src='./src/assets/logo.2c489fc453a1783cbadacf914efa3df6.svg'
              className='nav__logo'
              alt='logo'
            />
            <span className='nav__logo--text'>Dreact</span>
          </figure>
          <p className='copyrightText'>
            &copy; 2018 Dreact Inc. All Right Reserved.
          </p>
          <div className='footer__icongroup'>
            <p>facebook</p>
            <p>twitter</p>
            <p>youtube</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
