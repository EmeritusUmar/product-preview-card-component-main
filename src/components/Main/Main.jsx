/*eslint-disable*/
import React from 'react';
import Card from '../Card/Card';

function Main() {
  return (
    <div>
      <div className='flex justify-center h-screen items-center md:drop-shadow-lg'>
        <div className='md:w-[1440px] md:h-[724px] w-full h-full bg-[#F3EAE3]  flex justify-center items-center'>
          <Card className='flex justify-center' />
        </div>
      </div>

      <div className="md:block text-center  hidden mb-3">
      Challenge by <a className="underline font-bold" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a className="underline font-bold" href="https://umarmusa.netlify.app/" target="_blank" >Umar Musa</a>.
        </div>
    </div>
  );
}

export default Main;
