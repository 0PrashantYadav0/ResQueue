import React from 'react'

function Queue() {

  const handleCancel = () => {
    window.location.href = '/'
  }
  const handleSubmit = () => {
    window.location.href = '/confirmed'
  }

  return (
    <>
    <div className='p-8 w-1/2 shadow-xl shadow-gray-400 rounded-3xl m-4'>
      <div className='flex justify-between gap-4 '>
      <div>
        <p className='text-sm text-gray-400'>Estimated Time</p>
        <p className='text-xl font-semibold p-2'>1hr 45min</p>
      </div>
      <div>
        <p className='text-sm text-gray-400'>
        Current Position In Queue
        </p>
        <p className='text-xl font-semibold p-2'>
          5
        </p>
      </div>
      </div>
      
      <div className='flex w-full'>
    <button className='bg-gray-200 px-4 py-2 rounded-full m-4  text-xl w-1/2' onClick={handleCancel}>Cancel</button>
    <button className='bg-green-600 px-4 py-2 rounded-full m-4 text-white w-1/2 text-xl' onClick={handleSubmit}>Join the queue</button>
  </div>
      
    </div>
    
  </>
  )
}

export default Queue
