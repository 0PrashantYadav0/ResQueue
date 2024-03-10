import React from 'react'
import Hotelmodel from './Hotelmodel';

function RoyalCafe() {
  const hotelDetail = {
    hotelId: "royalcafe",
    name: "Royal Cafe, Non Veg Restaurant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7CHc5N3QgO2TQelR0hM9UzfcqgySM_Y0pA&usqp=CAU",
    rating: 4.9,
    orders: 1500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos explicabo tempora nam consectetur quisquam animi eius, voluptate unde maxime odio ex magni id nostrum sed nobis porro similique quae? Molestias!",
  };
  return (
    <Hotelmodel hotelDetails={hotelDetail} />
  )
}

export default RoyalCafe
