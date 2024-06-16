import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import { PiTelevisionFill } from 'react-icons/pi';

function Tvshow({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id='slider'>
          {movies.map((item) => (
            <div
              key={item.id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
              onClick={() => handleClick(item.id)}
            >
              {item.backdrop_path ? (
                <img
                  className='w-full h-40 object-cover block object-top'
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt={item.title}
                />
              ) : (
                <img
                  className='w-full h-40 block object-cover object-top'
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
              )}

              <div className='flex items-center mt-2'>
                <ul className='text-white flex gap-4 mr-4'>
                  <li>{item?.title || item?.name}</li>
                </ul>
                {item.media_type === 'movie' ? (
                  <div className='flex items-center'>
                    <MdLocalMovies className='text-white ' />
                    <span className='text-white'>Movie</span>
                  </div>
                ) : (
                  <div className='flex items-center gap-2'>
                    <PiTelevisionFill className='text-white' />
                    <span className='text-white'>TV</span>
                  </div>
                )}
              </div>


              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tvshow;