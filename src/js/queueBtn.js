import { listElement, btnUp, paginationContainer } from '../js/refs';
import { scrollPage } from './buttonUp.js';
import Pagination from 'tui-pagination';
import { getMovieArray } from './paginationMyLibrary';
import AOS from 'aos';
import { createPages } from './localStPages';
import 'aos/dist/aos.css';
import { options, renderMovie } from './paginationRender';
import { extractQueue } from './newLocalStorage';
import emptyImg from '../images/empty.jpg';
import { normalization } from './paginationMyLibrary';

AOS.init();

btnUp.addEventListener('click', scrollPage);

const pagination = new Pagination(paginationContainer, options);

export async function renderQueue() {
  const result = await extractQueue();

  if (!result || result.length === 0) {
    listElement.innerHTML = `<img  src="${emptyImg}" />`;
  } else {
    pagination.reset(result.length);
    const moviesArrays = createPages(result);

    const i = normalization(moviesArrays[0]);
    renderMovie(i);
  }
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  listElement.innerHTML = '';

  scrollPage();
  getMovieArray(extractQueue, currentPage);
});
