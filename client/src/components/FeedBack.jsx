import axios from 'axios';
import React, { useState } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleStarClick = (rating) => {
    setFeedbackData({ ...feedbackData, rating });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/reviews', feedbackData);
      console.log(res);
      setFeedbackData({
        name: '',
        email: '',
        message: '',
        rating: 0,
      })
      window.location.href = '/amar';
    } catch (error) {
      console.log(error)
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} onClick={() => handleStarClick(i)} className="cursor-pointer">
          {feedbackData.rating >= i ? <BsStarFill /> : <BsStar />}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded p-12">
        <div className='flex gap-12'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            value={feedbackData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={feedbackData.email}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            rows="4"
            placeholder="Your message..."
            value={feedbackData.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <div className="flex items-center gap-4 text-3xl">
            {renderStars()}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-[300px]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
