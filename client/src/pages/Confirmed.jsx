import React from 'react'
import "./Confirmed.css"
import vector from "../assets/vector-85.svg"
import image38 from "../assets/image-38@2x.png"
import iconshare from "../assets/iconshare.svg"
import iconclose from "../assets/iconclose.svg"
import rect from "../assets/rectangle-11.svg"

function Confirmed() {
  const date = new Date();
  //get user from localstorage
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  return (
    <div className='maindiv'>
      <div class="ticket-confirmed">
      <div class="image-39"></div>
      <div class="ta-da-booking-confirmed-container">
        <p class="ta-da">Ta-da!</p>
        <p class="ta-da">Booking confirmed</p>
      </div>
      <div class="weve-sent-you-container">
        <p class="ta-da">We’ve sent you the ticket copy on your</p>
        <p class="ta-da">email and WhatsApp.</p>
      </div>
      <div class="div28">🎉</div>
      <img class="iconclose" alt="" src={iconclose} />

      <img class="iconshare" alt="" src={iconshare} />

      <div class="booing-confirmed-card">
        <img
          class="booing-confirmed-card-child"
          alt=""
          src={rect}
        />

        <div class="booing-confirmed-card-item"></div>
        <img class="image-38-icon" alt="" src={image38} />

        <img
          class="booing-confirmed-card-inner"
          alt=""
          src={vector}
        />

        <img class="vector-icon" alt="" src={vector} />

        <div class="restaurant2">Restaurant</div>
        <div class="time">Time</div>
        <div class="seats2">Seats</div>
        <div class="customer">customer</div>
        <div class="deposit">Deposit</div>
        <div class="opera-house-mumbaimaharashtr-container">
          <p class="ta-da">Opera House,</p>
          <p class="ta-da">Mumbai,Maharashtra.</p>
        </div>
        <div class="khana-khazana">{user?.hotelId}</div>
        <div class="date">Date</div>
        <div class="div29">{date.getDay()}</div>
        <div class="am">{date.getHours()}</div>
        <div class="div30">4</div>
        <div class="krishil-sheth">{user.firstname+ " " + user.lastname}</div>
        <div class="order-id-parent">
          <div class="order-id">Order id</div>
          <div class="div31">01672721252926</div>
        </div>
        <div class="paid">₹ 5 Paid</div>
      </div>
  
    </div>
    </div>
  )
}

export default Confirmed
