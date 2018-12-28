import React from 'react';
import about from './about.png';

const Home = () => {
  return (
    <div>
      <h2 className='home-title'>SERINA KO</h2>
      <img src={about} width='20' height='20' />
      <p className='home-subtitle'>
        What matter to me is to enjoy
        <span className='boldText'>creating</span>,<br />
        <span className='boldText'>connecting with others</span>,<br />
        and <span className='boldText'>getting in touch with you</span>.
      </p>
    </div>
  );
};

export default Home;
