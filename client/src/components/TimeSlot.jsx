import React from 'react'

function TimeSlot({time}) {
  const handleSubmit = () => {
    window.location.href = '/confirmed'
  }
  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{time}</h2>
            <button onClick={handleSubmit} className='bg-green-600 text-white px-4 py-2 rounded-xl'>Resever</button>
          </div>
        </div>
      </div>
  )
}

export default TimeSlot
