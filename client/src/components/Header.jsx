import React from 'react';
import homeIcon from "../assets/iconlybulkhome.svg"
import chatIcon from "../assets/iconlybulkchat1.svg"
import cartIcon from "../assets/iconlybulkbuy2.svg"
import profile from "../assets/icon-profile3.svg"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-green-50 py-4 px-12 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className='flex'>
        <img src={homeIcon} alt="" />
        <span className="text-green-800">Home</span>
        </Link>
      </div>
      <div className="flex gap-12 space-x-4">
        <Link to="/"><img src={chatIcon} alt="" /></Link>
        <Link to="/"><img src={cartIcon} alt="" /></Link>
        <Link to="/login"><img src={profile} alt="" /></Link>
      </div>
    </div>
  );
};

export default Header;
