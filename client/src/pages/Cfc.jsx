import React from 'react'
import Hotelmodel from './Hotelmodel';

function Cfc() {
  const hotelDetail = {
    hotelId: "cfc",
    name: "CFC",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFncUppcULosWWSSMDG62Jgx5QnEbsaQaj4g&usqp=CAU",
    rating: 4.8,
    orders: 2000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos explicabo tempora nam consectetur quisquam animi eius, voluptate unde maxime odio ex magni id nostrum sed nobis porro similique quae? Molestias!",
  };
  return (
    <Hotelmodel hotelDetails={hotelDetail} />
  )
}

export default Cfc
