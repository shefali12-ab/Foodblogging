import React from 'react'
type buttonprops={
  buttonlabel:string;
 }
const WhiteBorderButton = ({buttonlabel}:buttonprops) => {
  return (
    <button className=' border border-1 border-solid border-white w-[20%] text-white bg-transparent py-3 px-26 rounded-3xl text-base font-semibold font-source-sans-pro'>
        {buttonlabel}
   </button>
  )
}

export default WhiteBorderButton