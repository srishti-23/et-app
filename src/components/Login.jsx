import React from 'react';
import { MdMovieCreation } from "react-icons/md";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#10141E] flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 flex justify-center mt-8">
        <div className="w-12 h-12 mr-10 flex items-center justify-center">
          <MdMovieCreation className="text-red-600 mx-auto" size={35}/>
      
        </div>
      </div>
      <div className="bg-[#1E2535] p-8 mt-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-[#10141E] text-white border border-gray-700 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 bg-[#10141E] text-white border border-gray-700 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
       
          <button
            type="submit"
            className="w-full py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300"
          >
           Login to your account
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <a href="/signup" className="text-red-500 hover:underline">SignUP</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
