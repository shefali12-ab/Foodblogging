import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="   lg:flex w-[100%] justify-between   items-center bg-[#F8F8F8] p-[4rem]  lg:p-[8rem] font-source-sans-pro">
      <div className="flex flex-col lg:flex-row justify-between w-[100%] lg:gap-0 gap-[2rem]">
        <Image
          src="/images/foodtruckbigger.png"
          alt=""
          height={125}
          width={161}
          className="mx-auto lg:mx-0"
        />
        <div className="lg:hidden flex  flex-col flex-start gap-[2rem] ">
          <div className="flex flex-col justify-start gap-3 w-[80%] text-[#646874] text-sm">
            <h1 className="font-semibold text-lg ">Contact Us</h1>
            <div className="flex flex-col gap-4 w-[100%]">
              <p>
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                Market, XYZ-343434
              </p>
              <p>example2020@gmail.com</p>
              <p>(904) 443-0343</p>
            </div>
          </div>
          <div className="flex flex-col justify-between text-[#646874] text-sm">
            <p className="text-[#0E2368] semi-bold text-lg">More</p>
            <p>About Us</p>
            <p>Products</p>
            <p>Career</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="lg:hidden mx-auto">
          <div className="flex flex-col items-center">
            <p className="text-[#0E2368] semi-bold text-lg ">Social Links</p>
            <div className="flex gap-1 items-center mb-6">
              <Image
                src="/images/instagramIcon.png"
                alt="instagramicon"
                height={21}
                width={21}
              />
              <Image
                src="/images/twittericon.png"
                alt="twittericon"
                height={69}
                width={69}
              />
              <Image
                src="/images/facebookIcon.png"
                alt="facebookicon"
                height={21}
                width={21}
              />
            </div>
            <p className="text-sm font-normal text-[#828B9C]">
              © 2022 Food Truck Example
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-start gap-3 w-[38%] text-[#646874] text-sm">
          <h1 className="font-semibold text-lg ">Contact Us</h1>
          <div className="flex flex-col gap-4 w-[50%] lg:w-[38%]">
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
          </div>
        </div>
        <div className="w-[50%] lg:w-[30%] hidden lg:flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-between text-[#646874] text-sm">
            <p className="text-[#0E2368] semi-bold text-lg ">More</p>
            <p>About Us</p>
            <p>Products</p>
            <p>Career</p>
            <p>Contact Us</p>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <p className="text-[#0E2368] semi-bold text-lg ">Social Links</p>
              <div className="flex gap-1 items-center mb-6">
                <Image
                  src="/images/instagramIcon.png"
                  alt="instagramicon"
                  height={21}
                  width={21}
                />
                <Image
                  src="/images/twittericon.png"
                  alt="twittericon"
                  height={69}
                  width={69}
                />
                <Image
                  src="/images/facebookIcon.png"
                  alt="facebookicon"
                  height={21}
                  width={21}
                />
              </div>
              <p className="text-sm font-normal text-[#828B9C] font-roboto">
                © 2022 Food Truck Example
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
