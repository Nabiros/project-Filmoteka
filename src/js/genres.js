import movieCards from '../templates/film-cards.hbs';
import NewApiService from './apiServise.js';
import errorUrl from '../images/something_went_wrong.webp';
import spinner from './spinner';

const cardCollection = document.querySelector('.card__collection');
const genresInput = document.querySelector('.genres-input');

genresInput.addEventListener('submit', onSearchMoviesByGenre)

const newApiService = new NewApiService();

function onSearchMoviesByGenre(e) {
    e.preventDefault();
    newApiService.searchQuery = e.currentTarget.elements.searchQuery.value.trim();
    clearCardCollection();
    if (newApiService.searchQuery === '') {
        return;
    }
    fetchByGenres();
}
  
function fetchByGenres() {
    newApiService.fetchByGenres().then(movies => {
        appendMoviesMarkup(movies);
       
    })
        .catch(err => {
    console.log('error in function render');
    listElement.innerHTML = `<img  src="${errorUrl}" />`;
  });
}

function appendMoviesMarkup(movies) {
    cardCollection.insertAdjacentHTML('beforeend', movieCards(movies));
}

function clearCardCollection() {
    cardCollection.innerHTML = '';
    
}


  

// async fetchByGenres() {
//     const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${KEY}`);
//     return response.data.genres;
//   }



// // Рендерим список жанров
// genresInput.addEventListener('click', onGenresListOpen);

// function onGenresListSearch(event) {
//     event.preventDefault();
//     list.innerHTML = '';
//     const searchGenres = event.target;
//     // renderGenresList(genres);
// }


// function renderGenresList(genre) {
//     const genresListMarkup = createGenresListMarkup(genre);
//     list.innerHTML = ('beforeend', genresListMarkup);
// }

// function createGenresListMarkup(genres) {
//     return genres.map(genre => `<li class = "genre-title">${genre}</li>`).join('');
// }

// newApiService.fetchByGenres();
// const genreTitle = document.querySelector('.genre-title');
// genreTitle.addEventListener('click', );
// async fetchByGenres() {
//     const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${KEY}`);
//     return response.data.genres;
// }

// Рендерим список фильмов по жанру


