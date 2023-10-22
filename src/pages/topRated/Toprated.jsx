import React, { useEffect, useState } from 'react';
import movieRequests from '../../services/Tmdb_api';
import { MovieComponent } from '../../components';
import { Link } from 'react-router-dom';
const Toprated = () => {
  const [top,setTop] = useState([]);

  useEffect(()=>{
   try{
    const fetchMovies = async() =>{
    const topMovies = await movieRequests.fetchTopRatedMovies();
    setTop(topMovies.results);
   }
   fetchMovies();
  }catch(err){
    console.log(err);
   }
  },[])
  return (
    <div>
      <p className='mt-7 text-4xl text-blue-300'>Top Rated Movies</p>
      <div className="wrapper grid justify-center gap-3 mt-3 md:mt-21 md:justify-between sm:grid-cols-3 md:grid-cols-5">

      {
        top.map((curval,index)=>{
            return (
              <Link to={`/details/${curval.id}`}>
              <MovieComponent key={curval.id} data={curval}/>
              </Link>
             )
        })
      }
      </div>
    </div>
  )
}

export  {Toprated}
