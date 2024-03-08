import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      console.log(response);
      window.location.href = '/confirmation';
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 rounded-xl">
      <form onSubmit={handleSubmit} className="bg-gray-100 flex flex-col gap-2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className='flex gap-2'>
        <div className="w-1/2 inline-block bg-gray-200 rounded-lg p-3">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none text-gray-900 bg-gray-200 border-0 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 inline-block bg-gray-200 rounded-lg p-3">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none text-gray-900 bg-gray-200 border-0 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="mb-4 bg-gray-200 p-4 rounded-xl">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 bg-gray-200 p-4 rounded-xl">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-2'>
        <div className="mb-4 bg-gray-200 p-4 rounded-xl">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seatNumber">
            Seat Number
          </label>
          <input
            className=" appearance-none border-0 rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="seatNumber"
            name="seatNumber"
            type="text"
            fixed="true"
            value={"5"}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 bg-gray-200 p-4 rounded-xl">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="queueNumber">
            Queue Number
          </label>
          <input
            className=" appearance-none border-0 bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="queueNumber"
            name="queueNumber"
            type="text"
            fixed="true"
            value={"12"}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
