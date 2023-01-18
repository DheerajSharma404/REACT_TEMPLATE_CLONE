import React from "react";
import FeatureCard from "./FeatureCard";

//Styles
import "./Feature.css";

const Feature = () => {
  return (
    <section id='feature'>
      <div className='feature__row'>
        <div className='feature__container'>
          <p className='purple feature__text'>FEATURES</p>
          <h2 className='feature__heading'>
            We have Amazing <span className='purple'>Service.</span>{" "}
          </h2>
          <p className='feature__subtext'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='feature__lists'>
            <FeatureCard
              icon='./src/assets/shield-icon.svg'
              title='Secure'
              subtext='We Strictly deal with the vendor that provide top notch security'
            />
            <FeatureCard
              icon='./src/assets/support-icon.svg'
              title='24/7 Support'
              subtext='Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'
            />
            <FeatureCard
              icon='./src/assets/customize-icon.svg'
              title='Customizable'
              subtext='Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'
            />
            <FeatureCard
              icon='./src/assets/reliable-icon.svg'
              title='Reliable'
              subtext='Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'
            />
            <FeatureCard
              icon='./src/assets/fast-icon.svg'
              title='Fast'
              subtext='Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'
            />
            <FeatureCard
              icon='./src/assets/simple-icon.svg'
              title='Easy'
              subtext='Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;
