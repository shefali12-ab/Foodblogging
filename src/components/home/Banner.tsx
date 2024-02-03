import React from "react";
import Image from "next/image";

import RedButton from "../buttons/RedButton";


const Banner = () => {
  return (
    <div className="  flex-col flex lg:flex-row w-full   ">
      <div className=" lg:flex flex-col  gap-[8rem] p-[8rem] lg:order-none order-last w-[50%] ">
        <Image
          src="/images/foodtruckmedium.png"
          alt="foodtruck"
          height={100}
          width={100}
          className="hidden lg:flex"
        />
        <div className=" flex flex-col gap-[1rem] items-center lg:items-start text-center w-[40rem] lg:text-start">
          <p className=" text-3xl lg:text-6xl w-[40%] lg:w-[60%] text-[#0E2368]  leading-[3rem] font-bold font-source-sans-pro  ">
            Discover the
            <span className="text-[#E23744]"> Best</span> Food and Drinks
          </p>
          <p className="font-normal text-[#444957] text-sm lg:text-base w-[50%] lg:w-[60%] font-open-sans">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <RedButton buttonlabel="Explore Now!" />
        </div>
      </div>

      <div
        style={{ backgroundImage: 'url("/images/pizza.png")' }}
        className="bg-no-repeat  w-[100%] lg:w-[50%]  bg-cover"
      >
        <Image
          src="/images/designVector.png"
          alt="designvector"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full "
        />
         <button className=' relative bottom-[50rem] lg:bottom-[100%]  m-[2rem] left-[70%]  border border-1 border-solid border-white w-[20%] text-white bg-transparent py-3 px-26 rounded-3xl text-base font-semibold font-source-sans-pro'>
         Get In Touch
   </button>
        {/* <div className="relative  left-[70%] m-[2rem] z-40 bg-black">
          <WhiteBorderButton buttonlabel="Get In Touch" />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
