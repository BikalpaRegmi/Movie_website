const movieRequests = {
 fetchPopularMovies : async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
    return await response.json();
 },
 fetchMovieDetail : async (movieId)=>{
    const response = await fetch (`https://api.themoviedb.org/3/movie/${ movieId }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
    return await response.json();
 },
 fetchUpcomingMovies: async ()=>{
   const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
   return await response.json();
 },
 fetchTopRatedMovies: async()=>{
   const response = await fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
   return await response.json();
 },
 fetchMoviesBySearchQuery: async(query) =>{
  const response = await fetch (`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
  return await response.json();
 }
}
export default movieRequests;
