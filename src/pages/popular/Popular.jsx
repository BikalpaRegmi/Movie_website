import React, { useEffect, useState } from 'react'
import movieRequest from '../../services/Tmdb_api';
import {MovieComponent} from '../../components'
import { Link } from 'react-router-dom';
const Popular = () => {
 const [pop,setpop] = useState([]);
 useEffect(()=>{
 try {

   const fetchMovies = async()=>{
     const popMovies = await movieRequest.fetchPopularMovies();
     setpop(popMovies.results);
    }
    fetchMovies();
  }
  catch(err){
    console.log(err)
  }
 },[])

  return (
    
    <div>
          <p className='mt-7 text-4xl text-blue-300'>Popular Movies</p>
          <div className="wrapper grid justify-center gap-3 mt-3 md:mt-21 md:justify-between sm:grid-cols-3 md:grid-cols-5">

      {
       pop.map((curval)=>{
        return(
  <Link to = {`/details/${curval.id}`}>
        <MovieComponent data={curval} key={curval.id}/>
</Link>
        )
       })
      }
      </div>
    </div>
  )
}

export {Popular}
