import { listElement, btnUp, paginationContainer } from '../js/refs';
import movieCards from '../templates/film-cards.hbs';
import NewApiService from './apiServise';
import errorUrl from '../images/something_went_wrong.webp';
import { scrollPage } from './buttonUp.js';
import Pagination from 'tui-pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

btnUp.addEventListener('click', scrollPage);

const newApiService = new NewApiService();

newApiService.fetchByGenres().then(r => {
  localStorage.setItem('listOfGenres', JSON.stringify(r));
});

function genresList() {
  const listOfGenres = localStorage.getItem('listOfGenres');
  return JSON.parse(listOfGenres);
}

const pagination = new Pagination(paginationContainer, {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
});

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


function dateAndGenreNormalization(data) {
    return data.results.map(movie => ({
        ...movie,
        release_date: movie.release_date.split('-')[0],
        genres: movie.genre_ids.map(id => genresList().filter(el => el.id === id)).flat(),
      }))
 }

pagination.on('afterMove', event => {
  const currentPage = event.page;
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

function renderMovie(movie) {
  const markup = movieCards(movie);
  listElement.innerHTML = markup;
  return markup;
}

