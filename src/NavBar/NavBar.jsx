import React from "react";

// Styles
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <figure className='nav__logo__container'>
          <img
            src='./src/assets/logo.2c489fc453a1783cbadacf914efa3df6.svg'
            className='nav__logo'
            alt='logo'
          />
          <span className='nav__logo--text'>Dreact</span>
        </figure>
        <ul className='nav__links'>
          <li>
            <a href='#about' className='nav__link'>
              About
            </a>
          </li>
          <li>
            <a href='#blog' className='nav__link'>
              Blog
            </a>
          </li>
          <li>
            <a href='#pricing' className='nav__link'>
              Pricing
            </a>
          </li>
          <li>
            <a href='#contactus' className='nav__link'>
              Contact Us
            </a>
          </li>
          <li>
            <a href='#login' className='nav__link'>
              LogIn
            </a>
          </li>
          <li>
            <a href='#signup' className='nav__link nav__logo--signup'>
              SignUp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
