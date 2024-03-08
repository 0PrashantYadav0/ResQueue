import React from 'react'

function TimeSlot({time}) {
  const handleSubmit = () => {
    window.location.href = '/confirmed'
  }
  return (
    <div className='flex justify-between p-8 w-1/4 shadow-xl shadow-gray-400 rounded-3xl m-4'>
      <p className='text-3xl'>
        {time}
      </p>
      <button className='bg-green-600 hover:bg-green-700 text-white py-4 px-6 text-lg rounded-3xl' onClick={handleSubmit}>Reserve</button>
    </div>
  )
}

export default TimeSlot
