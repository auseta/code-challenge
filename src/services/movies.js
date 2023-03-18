// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch

const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=b7d4916d0799dfce932437fe9f242f2c&language=en-US&'

const MoviesAPI = () => {

  const searchMovie = async (title) => {
    const response = await fetch(`${baseUrl}&query=${title}&page=1&include_adult=false`);
    const { results } = await response.json();
    return results
  }

  const searchMovieByYear = async (title, year) => {
    const response = await fetch(`${baseUrl}&query=${title}&page=1&include_adult=false`)
    const { results } = await response.json()
    const filterResults = await results.filter( rs => new Date(rs.release_date).getFullYear() <= Number(year) )
    return filterResults
  }

  return {
    searchMovie,
    searchMovieByYear
  }

} 

export default MoviesAPI