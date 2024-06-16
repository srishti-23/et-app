import React from 'react';
import { SiWindows } from "react-icons/si";
import { MdMovieCreation } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-16 ml-4 my-4 mr-2  rounded-md flex flex-col items-center justify-between bg-gray-900 py-4 rounded-t-lg rounded-b-lg">
      {/* Top Icons */}
      <div className="flex flex-col items-center space-y-6">
        {/* First Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-600">
          <MdMovieCreation className="text-red-600" />
        </div>
        {/* Spacer */}
        <div className="mt-4"></div>
        {/* Second Icon */}
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
          onClick={() => navigate('/')}
        >
          <SiWindows className="text-gray-500" size={25} />
        </div>
        {/* Third Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
        onClick={() => navigate('/movies')}>
          <MdLocalMovies className="text-gray-500" size={25} />
        </div>
        {/* Fourth Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
        onClick={() => navigate('/tvshow')}>
          <PiTelevisionBold className="text-gray-500" size={25} />
        </div>
        {/* Fifth Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full">
          <FaBookmark className="text-gray-500" size={25} />
        </div>
      </div>
      {/* Bottom Icon */}
      <div onClick={() => navigate('/signup')} className="w-10 h-10 cursor-pointer flex items-center mb-4 justify-center rounded-full bg-red-600">
      <VscAccount size={25}  />
      </div>
    </div>
  );
};

export default NavBar;