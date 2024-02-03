import React from 'react'

import '@fontsource/poppins';
import '@fontsource-variable/open-sans';
import '@fontsource/source-sans-pro';
import '@fontsource/roboto';

import Banner from '@/components/home/Banner'
import AboutSection from '@/components/home/AboutSection'
import Articles from '@/components/home/Articles'
import Footer from '@/components/home/Footer'

const page = () => {
  return (
    <div className='flex flex-col items-center  gap-[5rem] '>
      <Banner/>
      <AboutSection/>
      <Articles/>
      <Footer/>
    

    </div>
  )
}

export default page