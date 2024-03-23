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
      "Amar Restaurant beckons discerning diners with its enticing blend of culinary artistry and warm hospitality. Situated in a prime location, this gastronomic haven offers a diverse menu that celebrates the rich tapestry of flavors from around the world. From fragrant Indian spices to contemporary international fare, Amar Restaurant delights patrons with meticulously crafted dishes that captivate the palate. With its inviting ambiance, attentive service, and commitment to culinary excellence, Amar Restaurant is the perfect destination for memorable dining experiences and cherished moments with loved ones.",
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
