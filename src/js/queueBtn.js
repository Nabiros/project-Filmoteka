import { listElement, btnUp, paginationContainer } from '../js/refs';

import errorUrl from '../images/something_went_wrong.webp';
import { scrollPage } from './buttonUp.js';
import Pagination from 'tui-pagination';
import { getMovieArray } from './paginationMyLibrary';
import AOS from 'aos';
import { createPages } from './localStPages';
import 'aos/dist/aos.css';
import { options, renderMovie, dateAndGenreNormalization } from './paginationRender';
import { extractQueue } from './newLocalStorage';

AOS.init();

btnUp.addEventListener('click', scrollPage);

const pagination = new Pagination(paginationContainer, options);

export async function renderQueue() {
  const result = await extractQueue();

  if (result.length === 0) {
    alert('No movies to display');
  }
  pagination.reset(result.length);
  const moviesArrays = createPages(result);
  renderMovie(moviesArrays[0]);
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  listElement.innerHTML = '';

  scrollPage();
  getMovieArray(extractQueue, currentPage);
});
