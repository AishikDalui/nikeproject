import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='items-center justify-center flex flex-col'>
        <img 
        src={imgURL} 
        className='rounded-full w-[120px] h-[120px] object-cover'
        alt="" />

        <p className='text-center max-w-sm mt-6 info-text'>{feedback}</p>
        <div className='flex gap-2.5 mt-2'>
            <img src={star} 
               width={24}
               height={24}
            className='object-contain m-0'
            
            alt="" />
            <p className='text-xl font-montserrat text-slate-gray'> ({rating})  </p>
        </div>
        <h3 className='text-3xl text-center font-palanquin mt-2 font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard