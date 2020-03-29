document.addEventListener('DOMContentLoaded', function () {

    let watchlist = localStorage.getItem('watchlist')
    watchlistArray = JSON.parse(watchlist)
    
    var moveList = watchlistArray.map(function (movie) {
        return `
        <div class="mr-5 mb-2 card movie" style="width: 18rem;">
        <img class="card-img-top" src=${movie.Poster} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <p class="card-text">${movie.Year}</p>
        </div>
      </div>
        `

        
    })

    

    let moviesContainer = document.querySelector('.movies-container')

    moviesContainer.innerHTML = moveList.join('')

})

//<div><a href="#" class="btn btn-primary" onclick='saveToWatchlist("${movie.imdbID}")'>Add!</a></div>
