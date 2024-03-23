import axios from 'axios';
import React from 'react'

function TimeSlot({time}) {
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_FFmybeRKLHkZGx",
      amount: data.amount,
      currency: data.currency,
      name: localStorage.getItem("hotel").name,
      description: localStorage.getItem("hotel").description,
      image: localStorage.getItem("hotel").image,
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
  const handleSubmit = () => {
    
    window.location.href = '/confirmed'
  }
  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{time}</h2>
            <button onClick={handlePayment} className='bg-green-600 text-white px-4 py-2 rounded-xl'>Reserve</button>
          </div>
        </div>
      </div>
  )
}

export default TimeSlot
