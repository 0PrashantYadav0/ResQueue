import React from 'react'
import Hotelmodel from './Hotelmodel';
import { Outlet } from 'react-router-dom';

function Amar() {
  const hotelDetail = {
    hotelId: "amar",
    name: "Amar",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNT0ZILrhHHN8Q89NU_spyk9jsBFm4-FLwI2KOx=s1360-w1360-h1020",
    rating: 4.8,
    orders: 2000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos explicabo tempora nam consectetur quisquam animi eius, voluptate unde maxime odio ex magni id nostrum sed nobis porro similique quae? Molestias!",
  };

  if (!hotelDetail) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Hotelmodel hotelDetails={hotelDetail}/>
      <Outlet/>
    </>
  )
}

export default Amar
