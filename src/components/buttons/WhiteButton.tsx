import React from 'react'
type buttonprops={
    buttonlabel:string;
   }
const WhiteButton = ({buttonlabel}:buttonprops) => {
  return (
    <button className='border border-1 border-solid border-[#424961] w-[35%] text-[#424961] bg-white py-3 px-26 rounded-3xl text-base font-semibold font-source-sans-pro'>
    {buttonlabel}
</button>
  )
}

export default WhiteButton