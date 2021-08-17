import { listElement, btnUp, paginationContainer } from '../js/refs';
import movieCards from '../templates/film-cards.hbs';
import NewApiService from './apiServise';
import errorUrl from '../images/something_went_wrong.webp';
import { scrollPage } from './buttonUp.js';
import Pagination from 'tui-pagination';

btnUp.addEventListener('click', scrollPage);

const newApiService = new NewApiService();

newApiService.fetchByGenres().then(r => {
  localStorage.setItem('listOfGenres', JSON.stringify(r));
});

function genresList() {
  const listOfGenres = localStorage.getItem('listOfGenres');
  return JSON.parse(listOfGenres);
}

export const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
};

const pagination = new Pagination(paginationContainer, options);

popularMovieRender();
export function popularMovieRender() {
  newApiService
    .fetchPopularMovie(pagination.getCurrentPage())
    .then(data => {
      pagination.reset(data.total_pages);
      renderMovie(dateAndGenreNormalization(data));
    })
    .catch(err => {
      console.log('error in function render');
      listElement.innerHTML = `<img  src="${errorUrl}" />`;
    });
}

export function dateAndGenreNormalization(data) {
  return data.results.map(movie => ({
    ...movie,
    release_date: movie.release_date.split('-')[0],
    genres: movie.genre_ids.map(id => genresList().filter(el => el.id === id)).flat(),
  }));
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  listElement.innerHTML = '';
  scrollPage();
  newApiService
    .fetchPopularMovie(currentPage)
    .then(data => {
      renderMovie(dateAndGenreNormalization(data));
    })
    .catch(err => {
      console.log('error in function render');
      listElement.innerHTML = `<img  src="${errorUrl}" />`;
    });
});

export function renderMovie(movies) {
  movies.forEach(movie => {
    if (movie.genres.length > 2) {
      movie.genres = [...movie.genres.slice(0, 2), { name: 'Others' }];
    }
  });

  const markup = movieCards(movies);
  listElement.innerHTML = markup;
  return markup;
}