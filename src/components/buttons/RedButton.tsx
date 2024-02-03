import React from 'react'
type buttonprops={
 buttonlabel:string;
}
const RedButton = ({buttonlabel}:buttonprops) => {
  return (
   <button className='bg-[#E23744] text-white  py-3 px-26 rounded-3xl text-base lg:w-[25%] w-[30%] font-semibold font-source-sans-pro' >
        {buttonlabel}
   </button>
  )
}

export default RedButton