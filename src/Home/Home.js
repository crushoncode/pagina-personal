import React, { Component, Fragment } from 'react';
import './Home.css';
import about from './about.png';
import toHome from './toHome.png';
import profile from './profile.png';
import Modal from 'react-modal';

class Home extends Component {
  state = { isOpen: false };

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>
        <div className='header-about'>
          <h2 className='home-title'>SERINA KO</h2>

          <img
            className='about-icon'
            src={about}
            onClick={() => this.openModal()}
          />

          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={() => this.closeModal()}
          >
            <div className='design-rectangle' />
            <div className='body-textbox'>
              <h2 className='greeting'>
                Hi there, I am Serina. I am a Melbourne based mobile developer.
              </h2>
              <p className='about-details'>
                I am always curious about the new and developing technology
                landscape. We get to explore the power of innovation every
                single day. Imagination turns into reality, and it brings
                surprising and exciting change to society. I also love learning
                how innovation scales in technology - from invention all the way
                to large scale implementation. Wherever I end up, I would like
                to proactively contribute to creating a thriving environment
                where different skills compliment and benefit each other. I also
                would like to work on interesting projects with like-minded
                people which provide positive change to society.
              </p>
            </div>
            <img className='profile-image' src={profile} />
            <div className='design-rectangle' />
            <img
              className='toHome-icon'
              src={toHome}
              onClick={() => this.closeModal()}
            />
          </Modal>
        </div>

        <div className='home-subtitle'>
          What matters to me is to enjoy{' '}
          <span className='bold-text'>creating</span>,<br />
          <span className='bold-middle-text'>connecting with others</span>,
          <br />
          <p className='bold-last-text'>
            and <span className='bold-text'>getting in touch with you.</span>
          </p>
        </div>
      </Fragment>
    );
  }
}

// set up a react router
// need a modal styling

export default Home;
