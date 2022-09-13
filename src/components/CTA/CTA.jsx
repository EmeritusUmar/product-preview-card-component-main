import React, { useState } from 'react';
import cart from '../../images/icon-cart.svg';

function CTA() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <button type="submit" onClick={() => setActive(!active)} className={`flex justify-center md:w-[217px] w-[295px] bg-[#3D8168] items-center font-[Montserrat] text-white font-bold leading-[16px] text-[13px] md:tracking-[0.025em] tracking-[0.05em] md:h-[47px] hover:cursor-pointer h-[48px] rounded-[10px] mt-5 ${active ? 'bg-[#1A4031]' : 'bg-[#3D8168]'}`}>
        <img className="h-[15px] w-[14px] mr-2" src={cart} alt="cart" /> Add to Cart
      </button>
    </div>
  );
}

export default CTA;
