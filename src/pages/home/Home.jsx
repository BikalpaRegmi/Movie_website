import React, { useEffect, useState } from 'react';
import movieRequest from '../../services/Tmdb_api';
import { AiFillStar } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link, useSearchParams } from 'react-router-dom';
import { MovieComponent } from '../../components';
const Home = () => {
const[popularMovies,setPopularMovies] = useState([]);
const [query,setQuery] = useSearchParams();
const [upcomingMovies,setUpcomingMovies] = useState([]);
const [topMovies,setTopMovies] = useState([]);
const searchQuery = query.get('q')
 useEffect(()=>{
  try{
    const fetchMovies = async()=>{
      const popmovies = searchQuery ? await movieRequest.fetchMoviesBySearchQuery(searchQuery): await movieRequest.fetchPopularMovies();
      const upmovies =  searchQuery ? await movieRequest.fetchMoviesBySearchQuery(searchQuery): await movieRequest.fetchUpcomingMovies();
      const toprated =  searchQuery ? await movieRequest.fetchMoviesBySearchQuery(searchQuery): await movieRequest.fetchTopRatedMovies();
      setPopularMovies(popmovies.results);
      setUpcomingMovies(upmovies.results);
      setTopMovies(toprated.results);
    }
    fetchMovies();
  }catch(err){
    console.log(err)
  }
 },[searchQuery]) 
  if(searchQuery && !popularMovies && !upcomingMovies && !topMovies){
    <div>
      <p>No result found matching your search</p>
    </div>
  }
  return (
    <>
      <div className="posters">
        {
          popularMovies.length > 0 && !searchQuery ? (
        
        <Carousel
          showThumbs={false}
          autoPlay = {true}
          showArrows={true}
          stopOnHover={true}
          autoFocus={true}
          interval={3000}
          infiniteLoop = {true}
          showStatus = {false}
          > 
       {popularMovies.reverse().map((curval, index) => {
            return(
            <div key={index}>
            <Link  to={`/details/${curval.id}`} key={curval.id}>
              <div className="poster relative mt-1">
                <img src={`https://image.tmdb.org/t/p/original/${curval.backdrop_path}`} alt="" className='md:h-[381px] w-full md:opacity-70' />      
             <div className="description mb-16  text-lg md:text-3xl md:absolute top-7 opacity-100 flex flex-col justify-around md:h-1/2 md:mt-36" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
              <p className=' text-xl md:text-5xl bg-transparent'>{curval.original_title}</p>
              <p className='flex gap-3 bg-transparent'>Ratings : <AiFillStar className='text-2xl md:text-4xl'/>{curval.vote_average}</p>
              <p className='flex bg-transparent border-b-4 border-blue-700'>Release date : {curval.release_date}</p>
             </div>               
            </div>
            </Link>
            </div>
            )
       })}
        </Carousel>): (
          <p className='capitalize text-3xl italic py-7'>Results found regarding...   <span className='text-5xl ml-28 mt-5 md:ml-0'>"{searchQuery}"</span></p>
        )
        }
        {
          !searchQuery ? (
        <p className='text-5xl md:mt-9 ml-3 text-blue-300'> All Movies</p>
          )
          : ''
        }
        <div className="wrapper grid justify-center gap-3 mt-3 md:mt-21 md:justify-between sm:grid-cols-3 md:grid-cols-5">
          {
          popularMovies.map((movies)=>{
              return(
                <Link  to={`/details/${movies.id}`} key={movies.id}>
          <MovieComponent key={movies.id} data={movies} /> 
                </Link>
          )
            })
          }
          {
            upcomingMovies.map((upmovies)=>{
              return(
                <Link  to={`/details/${upmovies.id}`} key={upmovies.id}>
                <MovieComponent key={upmovies.id} data={upmovies}/>
                </Link>
              )
            })
          }
          {
            topMovies.map((top)=>{
              return(
                <Link  to={`/details/${top.id}`} key={top.id}>
                <MovieComponent key={top.id} data={top}/>
                </Link>
              )
            })
          }
         </div>

      </div>
    </>
  )
}

export  {Home}
