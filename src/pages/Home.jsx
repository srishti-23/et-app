import React from 'react';
import Row from '../components/Row';
import requests from '../Requests';
import Trending from '../components/Trending';
import NavBar from '../components/NavBar';
import Searchbar from '../components/Searchbar'


function Home() {
  return (
    <>
    <div className='bg-[#10141E]'>
     <Trending rowID='1' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='2' title='Recommended for you' fetchURL={requests.requestTopRated} />
        <Row rowID='3' title='' fetchURL={requests.requestTopRated} />
        </div> 
    </>
    
       
   

  );
}

export default Home;