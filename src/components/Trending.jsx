import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight, MdLocalMovies } from 'react-icons/md';
import { PiTelevisionFill } from 'react-icons/pi';

const Trending = ({ title, fetchURL, rowID, mediaType = null }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        const results = response.data.results.map(item => {
          return { ...item, media_type: item.media_type || mediaType };
        });
        setMovies(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchURL, mediaType]);
console.log(movies);
  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  }

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className='text-white font-bold md:text-xl mt-4  p-4'>{title}</h2>
      <div className='relative flex items-center group '>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide custom-scrollbar-hide relative'
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
              onClick={() => handleClick(item.id)}>
              {item?.backdrop_path ? (
                <img
                  className='w-full h-40 object-cover block object-top'
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt={item?.title || item?.name}
                />
              ) : (
                <img
                  className='w-full h-40 object-cover block object-top'
                  src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                  alt={item?.title || item?.name}
                />
              )}
              <div className='flex flex-col mt-2 text-sm text-white mx-2'>
                <div className='truncate'>{item?.title || item?.name}</div>
                <div className='flex items-center gap-2'>
                  {item.media_type === 'movie' ? (
                    <>
                      <MdLocalMovies className='text-white' />
                      <span className='text-white'>Movie</span>
                    </>
                  ) : (
                    <>
                      <PiTelevisionFill className='text-white' />
                      <span className='text-white'>TV</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default Trending;