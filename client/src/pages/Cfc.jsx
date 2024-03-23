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
      "CFC epitomizes seaside dining at its finest, offering guests an unparalleled culinary journey with a breathtaking oceanic backdrop. Situated on the picturesque coastline, this esteemed establishment captures the essence of coastal living, blending fresh, locally sourced ingredients with innovative culinary techniques. From delectable seafood delights to gourmet land-based dishes, each creation is a masterpiece crafted with precision and passion. The ambiance of the Marineroom is equally enchanting, with panoramic views of the azure waters creating a serene and idyllic atmosphere. Whether savoring a romantic dinner for two or hosting a special celebration, the Marineroom promises an unforgettable dining experience that celebrates the beauty of the sea and the artistry of gastronomy."
  };
  return (
    <Hotelmodel hotelDetails={hotelDetail} />
  )
}

export default Cfc
