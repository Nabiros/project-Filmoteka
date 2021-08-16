import NewApiService from './apiServise.js';
import errorUrl from '../images/something_went_wrong.webp';
import spinner from './spinner';

const list = document.querySelector('.genres-list');
const genresInput = document.querySelector('.genres-input');
const newApiService = new NewApiService();

// Рендерим список жанров
genresInput.addEventListener('click', onGenresListOpen);

function onGenresListOpen(event) {
    event.preventDefault();
    list.innerHTML = '';
    renderGenresList(genres);
}

function renderGenresList(genre) {
    const genresListMarkup = createGenresListMarkup(genre);
    list.innerHTML = ('beforeend', genresListMarkup);
}

function createGenresListMarkup(genres) {
    return genres.map(genre => `<li class = "genre-title">${genre}</li>`).join('');
}

newApiService.fetchByGenres();

// async fetchByGenres() {
//     const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${KEY}`);
//     return response.data.genres;
// }

// Рендерим список фильмов по жанру

const genreTitle = document.querySelector('.genre-title');
genreTitle.addEventListener('click', );
