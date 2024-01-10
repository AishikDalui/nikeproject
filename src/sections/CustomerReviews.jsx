import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-4xl font-bold text-center font-palanquin'> What Our 
      <span className='text-coral-red'>Customer</span> says</h3>
      <p className='text-center info-text max-w-lg m-auto mt-4'>
      Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='mt-24 flex  flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review,index)=>(
          <ReviewCard 
             key={index} 
             {...review}      
          />
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews