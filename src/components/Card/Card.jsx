import React from 'react';
import CTA from '../CTA/CTA';
import image1 from '../../images/image-product-desktop.jpg';
import image2 from '../../images/image-product-mobile.jpg';

function Card() {
  return (
    <div className="md:flex md:flex-row flex flex-col">
      <div>
        <img className="hidden md:block md:w-[271px]  md:h-[407px] md:rounded-tl-[10px]  md:rounded-bl-[10px]" src={image1} alt="Product" />
        <img className="md:hidden w-[343px] h-[240px] rounded-tr-[10px] rounded-tl-[10px]" src={image2} alt="Product" />
      </div>
      <div className="md:w-[271px] w-[343px] md:h-[407px] h-[371px] md:rounded-tr-[10px] rounded-bl-[10px] sm:rounded-bl-none rounded-br-[10px] bg-white">
        <p className="font-[Montserrat] w-[93px] font-medium text-[12px] md:mt-[29px] mt-[25px] md:ml-[28px] ml-[23px] tracking-[0.3em] leading-[114.5%]">PERFUME</p>

        <p className="hidden md:block font-[Fraunces] font-bold text-[30px] mt-[18px] ml-[28px] leading-[97.3%]">Gabrielle <br /> Essence Eau <br />De Parfum</p>

        <p className="md:hidden font-[Fraunces] font-bold text-[30px] mt-[14px] md:ml-[28px] ml-[23px] tracking-[0.035em] leading-[102.3%]">Gabrielle Essence <br /> Eau De Parfum</p>

        <p className="hidden md:block font-[Montserrat] font-medium text-[14px] mt-[22px] ml-[28px] leading-[158.4%]">A floral, solar and voluptuous <br />interpretation composed by <br />Olivier Polge, Perfumer-Creator <br />for the House of CHANEL.</p>

        <p className="md:hidden font-[Montserrat] font-medium text-[13px] mt-[17px]  ml-[23px] tracking-[0.045em] leading-[179.4%]">A floral, solar and voluptuous <br />interpretation composed by Olivier <br />Polge, Perfumer-Creator for the House of <br /> CHANEL.</p>

        <div className=" h-[39px] flex justify-start items-center mt-[19px]">
          <p className="font-[Fraunces]  ml-[28px] text-[#3D8168] font-bold leading-[39px] text-[32px] md:tracking-[0.06em] tracking-[-0.005em] mr-[15px]">$149.99 </p>
          <p className="font-[Montserrat] font-medium leading-[15px] text-[12px] tracking-[0.04em] sm:tracking-[0] line-through">$169.99</p>
        </div>
        <div className="flex justify-center">
          <CTA />
        </div>
      </div>

    </div>
  );
}

export default Card;
