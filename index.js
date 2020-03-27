$(document).ready(function() {
    $('.movies-container').html(renderMovies(movieData))
})

function renderMovies (movieArray) {
     let finalHTML = movieArray.map(currentMovie => {
        return  `
        <div class="mr-5 mb-2 card movie" style="width: 18rem;">
        <img class="card-img-top" src=${currentMovie.Poster} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${currentMovie.Title}</h5>
          <p class="card-text">${currentMovie.Year}</p>
          <a href="#" class="btn btn-primary">Add</a>
        </div>
      </div>
        `
        
    })
    
    return finalHTML.join('')
    
}