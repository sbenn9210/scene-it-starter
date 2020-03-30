document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault()
    var searchString = document.getElementById('search-input').value
    var urlEncodedSearchString = encodeURIComponent(searchString)

    axios.get( "http://www.omdbapi.com/?apikey=1af42991&s=" + urlEncodedSearchString).then(function(response) {
      moviesContainer.innerHTML = renderMovies(response.data.Search)
    })
  })

let moviesContainer = document.querySelector('.movies-container')

let input = document.getElementById('search-input')
 
function renderMovies (movieArray) {
  
   let finalHTML = movieArray.map(currentMovie => {
      return  `
      <div class="mr-5 mb-2 card movie" style="width: 18rem;">
      <img class="card-img-top" src=${currentMovie.Poster} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${currentMovie.Title}</h5>
        <p class="card-text">${currentMovie.Year}</p>
        <div><a href="#" class="btn btn-primary" onclick='saveToWatchlist("${currentMovie.imdbID}")'>Add!</a></div>
      </div>
    </div>
      `
     
     
      
  })
  
  return finalHTML.join('')
  
}



})


function saveToWatchlist (imdbID) {
  let movie = movieData.find(function(currentMovie) {
    return currentMovie.imdbID == imdbID
  })
  let watchlistJSON = localStorage.getItem('watchlist')
  let watchlist = JSON.parse(watchlistJSON)
  if (watchlist === null) {
    watchlist = []
  }
  watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON)

}