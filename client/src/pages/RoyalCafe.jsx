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
      "Royal Cafe exudes timeless elegance and culinary finesse, inviting guests into a realm of regal dining experiences. Nestled in a prestigious location, the cafe epitomizes sophistication with its opulent decor and impeccable service. From sumptuous breakfast spreads to indulgent afternoon teas and gourmet dinners, Royal Cafe offers an array of meticulously curated dishes that showcase the finest ingredients and culinary craftsmanship. Every visit to Royal Cafe is a journey of indulgence, where guests are treated to a symphony of flavors and textures in a setting fit for royalty. Whether for a leisurely meal or a special occasion, Royal Cafe promises a truly majestic dining experience that leaves a lasting impression on discerning palates."
  };
  return (
    <Hotelmodel hotelDetails={hotelDetail} />
  )
}

export default RoyalCafe
