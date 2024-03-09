import React, { useEffect, useState } from "react";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import order from "../assets/order-1-1@2x.png";
import queue from "../assets/queue-1-11@2x.png";
import location from "../assets/location-icon.svg";
import star4 from "../assets/icon-star4.svg";
import ordericon from "../assets/shoppingbag-1.svg";
import FeedbackForm from "../components/FeedBack";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";

function Hotelmodel() {
  const [count, setCount] = useState(0);
  const [reviews, setReviews] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const redirectToReservation = () => {
    if (count > 0) {
      window.location.href = "/reservation";
    }
  };

  const RenderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span>
          <BsStarFill />
        </span>
      );
    }
    return stars;
  };

  useEffect(() => {
    fetchReviews();
    RenderStars();
  }, []);

  const fetchReviews = async () => {
    try {
      const reviews = await axios.get("/api/reviews");
      setReviews(reviews.data);
      console.log(reviews.data);
    } catch (error) {
      console.log(error);
    }
  };

  const styleForButton =
    count > 0 ? "bg-green-400 text-white" : "bg-gray-200 text-gray-400";

  return (
    <div className="flex justify-between">
      <div className="px-12">
        <div className="relative -z-10">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNT0ZILrhHHN8Q89NU_spyk9jsBFm4-FLwI2KOx=s1360-w1360-h1020"
            alt="photo"
            className="w-full h-[500px]"
          />
        </div>
        <div className="bg-white rounded-t-3xl left-0 w-full relative -top-[200px]">
          <div className="flex justify-between px-6 py-12">
            <button className="bg-green-100 text-green-700 px-3 py-2 rounded-2xl">
              popular
            </button>
            <img src={location} alt="" />
          </div>
          <div>
            <p className="text-2xl px-6">Amar , Veg Restaurant</p>
            <div className="flex px-6 justify-between pb-2 pt-3">
              <div className="flex">
                <img src={star4} alt="" />
                <p className="text-gray-400 px-1">4.8 star</p>
              </div>
              <div className="flex">
                <img src={ordericon} alt="" />
                <p className="text-gray-400 px-1">2000+ order</p>
              </div>
            </div>
            <div>
              <p className="p-6 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                explicabo tempora nam consectetur quisquam animi eius, voluptate
                unde maxime odio ex magni id nostrum sed nobis porro similique
                quae? Molestias!
              </p>
            </div>
          </div>
          <div className="flex p-6 justify-between md:justify-evenly">
            <div>
              <img src={order} alt="" className="w-[100px]" />
              <p className="text-center">Reservation</p>
              <p className="text-center text-sm text-gray-600">Available</p>
            </div>
            <div>
              <img src={queue} alt="" className="w-[100px]" />
              <p className="text-center">Queue</p>
              <p className="text-center text-sm text-gray-600">Available</p>
            </div>
          </div>
          <p className="text-2xl font-semibold px-6">Reservations For?</p>
          <div className="md:flex md:m-6">
            <div className="flex shadow-lg shadow-gray-400 rounded-xl md:m-0 md:w-1/3 m-6 px-4 py-3 bg-gray-200 justify-between">
              <button onClick={decrement}>
                <img src={minus} alt="" />
              </button>
              <p className="text-lg px-2">{count}</p>
              <button onClick={increment}>
                <img src={plus} alt="" />
              </button>
            </div>
            <div className="mx-6 md:w-1/3">
              <button
                className={`w-full  rounded-xl py-4 ${styleForButton}`}
                onClick={redirectToReservation}
              >
                Check Reservations
              </button>
            </div>
          </div>
          <p className="font-semibold text-center text-3xl p-5">Reviews</p>
          {reviews.map((review) => (
            <div className="bg-gray-100 m-6 p-6 rounded-xl" key={review._id}>
              <div>
                <p className="text-2xl font-semibold">{review.name}</p>
                <p className="text-gray-400">{review.email}</p>
              </div>
              <p>{review.message}</p>
              <div className="flex gap-2 p-1">{RenderStars(review.rating)}</div>
            </div>
          ))}
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}

export default Hotelmodel;
