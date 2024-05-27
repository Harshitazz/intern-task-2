import React from 'react';
import Icon from '../images/pattern-circles.svg'
function Intro() {
  return (
    <div className='text-center '>
      <div className="relative py-5 mb-5" style={{ backgroundImage: `url(${Icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

      <p className="font-manrope mb-2 text-1xl min-[375px]:text-4xl font-extrabold" >Simple, traffic-based pricing</p>
      <p className="text-sm text-tahiti text-xs ">Sign-up for our 30-day trial. No credit card required.</p>
    </div>
    </div>
  );
}

export default Intro;
