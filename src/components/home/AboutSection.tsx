import React from 'react'
import Image from 'next/image'

import RedButton from '../buttons/RedButton'

const AboutSection = () => {
  return (
    <div className='flex p-[4rem] bg-[#f6f7fb]' >
       <div className='  hidden lg:flex w-[50%]'>
        <Image src="/images/servingCustomer.png" alt='' height={468} width={384} className='m-auto'/>
       </div>
       <div className='w-[134%] lg:w-[50%] flex  justify-center items-center'>
        <div className=' flex flex-col gap-[21px] items-center lg:items-start w-[80%] '>
            
            <div className='flex flex-col gap-[28px]   w-[80%] lg:w-[70%] text-center lg:text-justify '>
            <h1 className='text-[#0E2368] text-5xl font-semibold font-poppins'>About Us</h1>
            <p className='font-normal text-[#444957] text-sm lg:text-base leading-[27px] font-open-sans'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
            </p>

            </div>
            <RedButton buttonlabel='Read More'/>
        </div>
       </div>
    </div>
  )
}

export default AboutSection