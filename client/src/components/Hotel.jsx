import React from 'react'
import rectangle from "../assets/rectangle-387@2x.png"

function Hotel({hotelId}) {
  return (
    <div className='flex justify-between gap-4 p-8 w-1/2 shadow-xl shadow-gray-400 rounded-3xl m-4'>
      <div className='flex'>
        <img src={rectangle} alt="" />
        <div className='p-4 text-xl'>
            <p className='capitalize font-bold text-3xl'>{hotelId}</p>
        </div>
      </div>
      <p className='text-2xl text-green-500'>4 Seats</p>
    </div>
  )
}

export default Hotel
