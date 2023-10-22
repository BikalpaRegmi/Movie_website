import React, { useEffect, useState } from 'react';
import { FiSearch, FiMenu, FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Navbar = ({onSearch}) => {
  const [hamburger,setHamburger] = useState(false);
  const [search,setSearch] = useState(false);  
  const [query,setQuery] = useState('');
  const [userSearch,setUserSearch] = useState()
  const [checkWidth,setCheckWidth] = useState(true);
  const toggleSearch = () =>{
    if(!search){
      setSearch(true);  
    }else{
      setSearch(false);
      if(query.trim().length){
        onSearch(query.trim())
      }
    }
  }
  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.code === 'Enter') {
        event.preventDefault();
        toggleSearch();
      } 
    };
  
    document.addEventListener('keydown', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyUp);
    };
  }, [toggleSearch]);

const toggleHamburger = ()=>{
  setHamburger(false);
}
useEffect(()=>{
 const seeScreenWidth = () =>{
  if(window.innerWidth < 770){
    setHamburger(true);
    setCheckWidth(false);
  }else{
    setHamburger(false);
    setCheckWidth(true);
  }
 };
  seeScreenWidth();
   

  window.addEventListener('resize',seeScreenWidth);
  return ()=>{
    window.removeEventListener('resize',seeScreenWidth);
  }
},[])

  return (
  <>
   <nav className='md:shadow-md md:w-full md:shadow-blue-500  md:p-1 md:flex justify-between'>
    <div className="img">
      <img src="images.png" alt=""  className=' md:w-40 md:h-20 w-full h-36 mt-5 p-3 rounded-full'/>
    </div>
 
    
       <div className="menu flex justify-around  md:self-center md:w-5/6">
       {
         hamburger ?        
         <FiMenu className={`md:hidden cursor-pointer text-3xl mt-1`} onClick={toggleHamburger}/>
         : 
         ( <div className='md:w-[999px]  md:bg-green-100 md:self-center'>
         <FiXCircle onClick={()=>setHamburger(true)} className='md:hidden cursor-pointer text-3xl'/>
         <ul className='md:flex   justify-between text-xl capitalize md:text-lg'>
        
         <li className='cursor-pointer hover:text-blue-500 my-7  md:px-2 border-b-2 md:border-none w-full'> <Link to={'/'} onClick={()=>{if(!CheckWidth){ setHamburger(true)}}}> home </Link></li>
          <li className='cursor-pointer hover:text-blue-500 my-7  md:px-2 border-b-2 md:border-none w-full'><Link to={'toprated'} onClick={()=>{if(!CheckWidth){ setHamburger(true)}}}>top rated</Link></li>
          <li className='cursor-pointer hover:text-blue-500 my-7  md:px-2 border-b-2 md:border-none w-full'><Link to={'upcoming'} onClick={()=>{if(!CheckWidth){ setHamburger(true)}}}>upcoming</Link></li>
          <li className='cursor-pointer hover:text-blue-500 my-7  md:px-2 border-b-2 md:border-none w-full'><Link to={'popular'} onClick={()=>{if(!CheckWidth){ setHamburger(true)}}}>popular</Link></li>
         </ul>
         </div>
         
         )
       }
        <div className=' md:flex'>
       <FiSearch className='cursor-pointer text-3xl mt-1 md:mx-12 md:mt-6 m-auto ' onClick={toggleSearch}/>
       {
         search ? (
          <div className='flex'>
            <input type="text" value={query} onChange={(event)=>setQuery(event.target.value)} className='border-2 md:border-2 border-blue-500 rounded-xl h-12 w-40 mt-4 pl-3'/>
          </div>
         ): 
         ''
       }
       </div>
       </div>
   
   </nav>
  </>
    )
};

export { Navbar };
