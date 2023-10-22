import React from 'react';
import './App.css';
import {MovieDetails} from './pages/movieDetail';
import {Navbar} from './components';
import {Popular} from './pages/popular';
import {Upcoming} from './pages/upcoming';
import {Home} from './pages/home'
import {Toprated} from './pages/topRated';
import { Routes,Route,useNavigate,createSearchParams} from 'react-router-dom';
const App = () => {
const navigate = useNavigate();

const onSearch = (query)=>{
navigate(`/?${createSearchParams({q:query})}`)
}
  return (
    <div>
      <Navbar onSearch={onSearch}/>
      <Routes>
        <Route path={`/details/:movieId`} Component={MovieDetails}/>
        <Route path='popular' Component={Popular}/>
        <Route path='toprated' Component={Toprated}/>
        <Route path='upcoming' Component={Upcoming}/>
        <Route path='/' Component={Home}/>
      </Routes>
    </div>
  )
}

export default App
