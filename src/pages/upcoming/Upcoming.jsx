import React, { useEffect, useState } from 'react'
import movieRequests from '../../services/Tmdb_api';
import { MovieComponent } from '../../components';
import { Link } from 'react-router-dom';
const Upcoming = () => {
 const [upMovies,setUpMovies] = useState([]);
 useEffect(()=>{
  try{
    const fetchMovies = async() =>{
      const upcoming = await movieRequests.fetchUpcomingMovies();
      setUpMovies(upcoming.results);
     }
     fetchMovies();
  } catch(err){
    console.log(err)
  }
 },[])
  return (
    <div>
    <p className='mt-7 text-4xl text-blue-300'>Upcoming Movies</p>
          <div className="wrapper grid justify-center gap-3 mt-3 md:mt-21 md:justify-between sm:grid-cols-3 md:grid-cols-5">

        {
          upMovies.map((curval,index)=>{
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

export {Upcoming}
