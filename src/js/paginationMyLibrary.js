import { listElement, btnUp, paginationContainer } from '../js/refs';
import movieCards from '../templates/film-cards.hbs';
import NewApiService from './apiServise';
import errorUrl from '../images/something_went_wrong.webp';
import { scrollPage } from './buttonUp.js';
import Pagination from 'tui-pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { options, renderMovie, dateAndGenreNormalization } from './paginationRender';
import { extractWatched, extractQueue } from './newLocalStorage';

btnUp.addEventListener('click', scrollPage);

const newApiService = new NewApiService();
const pagination = new Pagination(paginationContainer, options);

export async function renderWatched() {
  const result = await extractWatched();

  if (result.length === 0) {
    alert('No movies to display');
  }
  pagination.reset(result.length);
  renderMovie(result);
}

export async function renderQueue() {
  const result = await extractQueue();

  if (result.length === 0) {
    alert('No movies to display');
  }
  pagination.reset(result.length);
  renderMovie(result);
}

// pagination.on('afterMove', event => {
//   const currentPage = event.page;
//   listElement.innerHTML = '';
//   scrollPage();
//   extractWatched().then(data => {
//     if (data.length === 0) {
//       alert('No movies to display');
//     }
//     const markup = renderMovie(data);
//     return markup;
//   });
// });

// не считает страницы

pagination.on('afterMove', event => {
  const currentPage = event.page;
  listElement.innerHTML = '';
  scrollPage();
  extractWatched().then(data => {
    if (data.length === 0) {
      alert('No movies to display');
    }
    const markup = renderMovie(data);
    return markup;
  });
});
