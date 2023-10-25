import React from 'react';
import { AiFillStar } from "react-icons/ai";

const MovieComponent = (props) => {
 const {poster_path,original_title,release_date,vote_average} = props.data;
  
    return (
   <>
          
        <div className='border p-3 border-blue-500 bg-slate-950 hover:bg-slate-800'>   
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt=" the image is not supported" className='rounded-3xl w-96 md:h-40 h-64 p-3 opacity-70'/>
       
        <div className="des bg-blue-950 flex flex-col justify-around md:h-52   md:w-full ">      
             <p className='text-center text-lg' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>{original_title}</p>
         <ul className='flex justify-around text-sm mt-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <li style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>{release_date}</li>
            <li style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} className='md:flex'><AiFillStar className='text-lg'/> <span className='bg-transparent'> {vote_average}</span></li>
         </ul>
          </div>
          </div>
         
         
    
   </>
  )
}

export  {MovieComponent}
