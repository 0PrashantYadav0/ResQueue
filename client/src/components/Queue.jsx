import axios from 'axios';
import React from 'react'

function Queue() {
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_FFmybeRKLHkZGx",
      amount: data.amount,
      currency: data.currency,
      name: "book.name",
      description: "Test Transaction",
      image: "./vite.svg",
      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(`/verify`, response);
          console.log(data);
          window.location.href = '/confirmed'
        } catch (error) {
          console.log(response);
          console.log(error);
        } finally{
          window.location.href = '/confirmed'
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp2 = new window.Razorpay(options);
    rzp2.open();
  };
  const handlePayment = async () => {
    try {
      const { data } = await axios.post('/api/process/payment', { amount: 5 });
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    window.location.href = '/'
  }
  const handleSubmit = () => {
    window.location.href = '/confirmed'
  }

  return (
    <>
    <div className='p-8 w-1/2 shadow-xl shadow-gray-400 rounded-3xl m-4'>
      <div className='flex justify-between gap-4 '>
      <div>
        <p className='text-sm text-gray-400'>Estimated Time</p>
        <p className='text-xl font-semibold p-2'>1hr 45min</p>
      </div>
      <div>
        <p className='text-sm text-gray-400'>
        Current Position In Queue
        </p>
        <p className='text-xl font-semibold p-2'>
          5
        </p>
      </div>
      </div>
      
      <div className='flex w-full'>
    <button className='bg-gray-200 px-4 py-2 rounded-full m-4  text-xl w-1/2' onClick={handleCancel}>Cancel</button>
    <button className='bg-green-600 px-4 py-2 rounded-full m-4 text-white w-1/2 text-xl' onClick={handlePayment}>Join the queue</button>
  </div>
      
    </div>
    
  </>
  )
}

export default Queue
