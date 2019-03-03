import React, { Fragment } from 'react';
import './About.css';
import toHome from './toHome.png';
import profile from './profile.png';

export const About = () => {
  return (
    <Fragment>
      <div className='design-rectangle' />
      <img
        className='toHome-icon'
        src={toHome}
        onClick={() => this.closeModal()}
      />
      <div className='body-flexContainer'>
        <div className='body-textbox'>
          <h2 className='greeting'>Hi there, I am Serina.</h2>
          <h2 className='greeting'>I am a Melbourne based mobile developer.</h2>
          <p className='about-details'>
            I am always curious about the new and developing technology
            landscape. We get to explore the power of innovation every single
            day. Imagination turns into reality, and it brings surprising and
            exciting change to society. I also love learning how innovation
            scales in technology - from invention all the way to large scale
            implementation. Wherever I end up, I would like to proactively
            contribute to creating a thriving environment where different skills
            compliment and benefit each other. I also would like to work on
            interesting projects with like-minded people which provide positive
            change to society.
          </p>
        </div>

        <img className='profile-photo' src={profile} />
      </div>

      <div className='design-rectangle' />
    </Fragment>
  );
};

// set up a react router
