
"use client";
import React from "react";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "next/image";

import WhiteButton from "../buttons/WhiteButton";

const Articles = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);
  //const [slidecount , setslidecount] = useState(1);
  const sliderSettings = {
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:false,
    responsive: [
      {
        breakpoint: 800,
        
        settings: {
          slidesToShow: 1, // Show one slide at a time on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
    
  };

  const FoodCards = [
    {
      imageSrc: "/images/meal5.png",
      title: "Grilled  Tomatoes at Home",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageSrc: "/images/meal1.png",
      title: "Snacks for Travel",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageSrc: "/images/meal6.png",
      title: "Post-workout Recipes",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageSrc: "/images/meal4.png",
      title: "How To Grill Corn",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageSrc: "/images/meal2.png",
      title: "Crunchwrap Supreme",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      imageSrc: "/images/meal3.png",
      title: "Broccoli Cheese Soup",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];
  return (
    <div className="h-[40%] flex flex-col gap-[4rem] items-center lg:items-start">
      <p className="text-[#0E2368] text-5xl font-semibold font-source-sans-pro tracking-wider">Latest Articles</p>
      <div className="container">
       
        <Slider ref={setSliderRef} {...sliderSettings}>
          {FoodCards.map((item, index) => (
           <div  key={index} className="ml-[10%] lg:ml-0">
             <div
             
              className="w-[80%] h-[60%] border border-1 border-[#93A2D361] rounded-2xl  flex flex-col items-center  p-[2rem] gap-[2rem]"
            >
              <Image
                src={item.imageSrc}
                alt="mealimage"
                height="0"
                width="0"
                sizes="100vw"
                className=" w-[60%] lg:w-full h-auto"
              />
              <div className="flex flex-col gap-[2rem] items-center lg:items-start">
                <p className="text-[#0E2368] font-bold text-[21px] font-poppins">
                  {item.title}
                </p>
                <p className="font-normal text-[15px] w-[60%] lg:w-[90%] text-[#444957] font-open-sans">
                  {item.description}
                </p>
                <WhiteButton buttonlabel="Read More" />
              </div>
            </div>
           </div>
          ))}
        </Slider>
       <div className="flex justify-center gap-[2rem] mt-[2rem]">
       <button onClick={sliderRef?.slickPrev } >
          <Image
            src="/images/leftarrowIcon.png"
            alt="left-arrow"
            height={30}
            width={30}
          />
        </button>
        <p className="text-[#424961]">1/6</p>
        <button onClick={sliderRef?.slickNext}>
          <Image
            src="/images/rightarrowIcon.png"
            alt="right-arrow"
            height={30}
            width={30}
          />
        </button>
       </div>
      </div>
    </div>
  );
};

export default Articles;