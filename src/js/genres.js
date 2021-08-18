import { paginationContainer, listElement } from '../js/refs';
import errorUrl from '../images/something_went_wrong.webp';
import NewApiService from './apiServise';
import Pagination from 'tui-pagination';
import {
  options,
  popularMovieRender,
  renderMovie,
  dateAndGenreNormalization,
} from './paginationRender';
import { scrollPage } from './buttonUp.js';
import { debounce } from 'lodash';

const DEBOUNCE_DELAY = 300;
const newApiService = new NewApiService();
const pagination = new Pagination(paginationContainer, options);

// const listElement = document.querySelector('.js-card');

const genresInput = document.querySelector('.genres-input');
const genresList = document.querySelector('.genres-list');

genresInput.addEventListener('click', onGenresListSearch);

function onGenresListSearch(e) {
    e.preventDefault();
    genresList.innerHTML = '';
     renderGenresList(genres.name);
}

function renderGenresList() {
    newApiService.fetchByGenres();
        
    const genresListMarkup = createGenresListMarkup(genres.name);
    genresList.innerHTML = ('beforeend', genresListMarkup);
    console.log(genresList.innerHTML);
}

function createGenresListMarkup(genres) {
    return genres.map(genre => `<li class = "genre-title">${genres.name}</li>`).join('');
}


// Рендерим фильмы по жанрам

// const genresInput = document.querySelector('.genres-input');
// const genresList = document.querySelector('.genres-list');
// const clickedGenreTitle = document.querySelector('.genre-title');
// const genresInputField = document.querySelector('.genres-input__field');

// genresInputField.addEventListener('submit', onSearchMoviesByGenre)
// clickedGenreTitle.addEventListener('click', onSearchByGenre);

// function onSearchByGenre(e) {
//     const clickedGenreTitle = e.target.value;
//     // console.log(e.target.value);
//   genresInputField.value = clickedGenreTitle.textContent;

//    newApiService.searchQuery = genresInputValue;
//     genreRenderOfMovie();
//   }

// function genreRenderOfMovie() {
//   newApiService
//     .fetchByGenreBtn(pagination.getCurrentPage())
//     .then(data => {
//       pagination.reset(data.total_pages);
//       renderMovie(dateAndGenreNormalization(data));
//     })
//     .catch(err => {
//       console.log('error in function render');
//       listElement.innerHTML = `<img  src="${errorUrl}" />`;
//     });
// }


// function appendMoviesMarkup(movies) {
//     listElement.insertAdjacentHTML('beforeend', movieCards(movies));
// }

// function clearCardCollection() {
//     listElement.innerHTML = '';
    
// }

// function onSearchMoviesByGenre(e) {
//     e.preventDefault();
//     newApiService.searchQuery = e.currentTarget.elements.searchQuery.value.trim();
//     clearCardCollection();
//     if (newApiService.searchQuery === '') {
//         return;
//     }
//     fetchByGenres();
// }
  
// function fetchByGenres() {
//     newApiService.fetchByGenres().then(movies => {
//         appendMoviesMarkup(movies);
       
//     })
//         .catch(err => {
//     console.log('error in function render');
//     listElement.innerHTML = `<img  src="${errorUrl}" />`;
//   });
// }



