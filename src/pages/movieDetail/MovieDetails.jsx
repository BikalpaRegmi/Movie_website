import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";

import movieRequests from '../../services/Tmdb_api'
const MovieDetails = () => {
  const [movie,setmovie] = useState({});
  const {movieId} = useParams();

  useEffect(()=>{
  try{

    const moviedet = async()=>{
      const movie = await movieRequests.fetchMovieDetail(movieId);
      setmovie(movie);
      console.log(movie)
    }
    moviedet();
   }catch(err){
    console.log(err)
   }
  },[movieId])
  return (
    <div>
    <div className="wrapper">
      <div className="image-poster md:px-9">
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt=" the image is not supported" className='rounded-xl w-full md:h-[449px] h-64 p-3 opacity-70'/>
      </div>

      <div className="images&details md:flex justify-around">
      <div className="img">
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt=" the image is not supported" className='rounded-[90px] w-4/5 md:w-72  h-64 p-3 ml-9 opacity-70'/>
      </div>
      <div className="right mt-1">
        <p className='text-3xl text-center pb-5'>{movie.original_title}</p>
        <p className='text-lg text-blue-300 px-3'>{movie.tagline}</p>
        <p className='flex gap-9 md:gap-3 px-3 pt-3'><AiFillStar className='text-2xl'/><span className='text-lg'>{movie.vote_average} ({movie.vote_count} votes)</span></p>
        <p className='px-3 py-3'>Runtime : {movie.runtime} mins</p>
        <p className='px-3 py-3'>Release date : {movie.release_date}</p>
      </div>
      </div>

        <p className='px-7 md:px-12 text-lg flex flex-col gap-7'><span className=' text-blue-500 text-3xl text-center'>Description </span>{movie.overview}</p>

      </div>
      <div className="buttons md:flex ml-1 md:justify-around">
        <button className='border-2 mt-5 border-blue-300 md:w-96g hover:bg-blue-950 text-3xl w-full h-12 rounded-full bg-blue-700 text-white '> <a href={movie.homepage} target='blank' className='bg-transparent'> Goto Movie Official Page</a></button>
       
      </div>
    </div>
  )
}

export {MovieDetails}