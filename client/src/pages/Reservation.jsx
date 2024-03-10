import React, { useEffect, useState } from 'react'
import Form from '../components/Form'

function Reservation() {
  //get hotelId from url
  const [userCount, setUserCount] = useState();
  const path = window.location.pathname;
  const parts = path.split("/");


  
  useEffect(()=> {
    setUserCount(localStorage.getItem('userCount'));
  }, [])

  return (
    <>
      <Form Count={userCount} hotelId={parts[2]}/>
    </>
  )
}

export default Reservation
