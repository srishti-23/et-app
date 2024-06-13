import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Row({ title, fetchURL}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
          setMovies(response.data.results);
        });
      }, [fetchURL]);
     
      console.log(movies);
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id ={'slider'}>
            {movies.map((item,id) =>(
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            {item?.backdrop_path ? (
                <img className='w-full h-40 object-cover block object-top'
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                    alt={item?.title} />
            ) : (
                <img className='w-full h-40 block object-cover object-top'
                    src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                    alt={item?.title} />
            )}
           </div>
            ))}
            </div>
        </div>
    </>
  )
}

export default Row