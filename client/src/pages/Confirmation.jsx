import React from 'react'
import Hotel from '../components/Hotel'
import TimeSlot from '../components/TimeSlot'
import Queue from '../components/Queue'

function Confirmation() {
  const timeList = ["7:30PM", "8:00PM", "8:30PM", "9:00PM", "9:30PM", "10:00PM", "10:30PM", "11:00PM"]
  const [checkState, setCheckState] = React.useState(true)
  const bgThemeReservation = checkState ? 'bg-green-700 text-white' : 'bg-white text-green-700'
  const bgThemeQueue = checkState ? 'bg-white text-green-700' : 'bg-green-700 text-white'
  return (
    <div>
    <div className='border-2 border-gray-500 inline-block rounded-full mx-6 my-4 text-2xl'>
      <button onClick={()=>(setCheckState(true))} className={`px-6 py-4 rounded-full border-2 ${bgThemeReservation}`}>Reservation</button>
      <button onClick={()=>(setCheckState(false))} className={`px-6 py-4 rounded-full border-2 ${bgThemeQueue}`}>Queue</button>
    </div>
      <Hotel/>
      {checkState ? 
      <div className='flex flex-wrap'>
      {timeList.map((time, index) => (
        <TimeSlot key={index} time={time} />
      )
      )}
      </div> : <div>
        <Queue/></div>}
    </div>
  )
}

export default Confirmation
