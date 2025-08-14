const apiKey = '75afe0f2';
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const movieDetails = document.getElementById('movieDetails');
const searchResults = document.getElementById('searchResults');

searchBtn.addEventListener('click', searchMovies);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchMovies();
  }
});

function searchMovies() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchMovieData(searchTerm);
  }
}

function fetchMovieData(searchTerm) {
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'True') {
        displaySearchResults(data.Search);
      } else {
        displayErrorMessage(data.Error);
      }
    })
    .catch(error => {
      displayErrorMessage('An error occurred while fetching movie data.');
      console.error('Error:', error);
    });
}

function displaySearchResults(movies) {
  searchResults.innerHTML = '';
  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <p>${movie.Type}</p>
      </div>
    `;
    searchResults.appendChild(movieCard);
  });
}

function displayErrorMessage(message) {
  searchResults.innerHTML = `<p>${message}</p>`;
}