import { listElement, btnUp, paginationContainer } from '../js/refs';

import errorUrl from '../images/something_went_wrong.webp';
import { scrollPage } from './buttonUp.js';
import Pagination from 'tui-pagination';
import AOS from 'aos';
import { createPages } from './localStPages';
import 'aos/dist/aos.css';
import { options, renderMovie, dateAndGenreNormalization } from './paginationRender';
import { extractWatched, extractQueue } from './newLocalStorage';

AOS.init();

btnUp.addEventListener('click', scrollPage);

const pagination = new Pagination(paginationContainer, options);

export async function renderWatched() {
  const result = await extractWatched();

  if (result.length === 0) {
    alert('No movies to display');
  }
  pagination.reset(result.length);
  const moviesArrays = createPages(result);
  renderMovie(moviesArrays[0]);
}

export async function renderQueue() {
  const result = await extractQueue();

  if (result.length === 0) {
    alert('No movies to display');
  }
  pagination.reset(result.length);
  renderMovie(result);
}

// не считает страницы

pagination.on('afterMove', event => {
  const currentPage = event.page;
  listElement.innerHTML = '';

  scrollPage();
  blabla(extractWatched, currentPage);
});

function blabla(extract, page) {
  extract().then(data => {
    if (data.length === 0) {
      alert('No movies to display');
    }
    const moviesArrays = createPages(data);
    console.log(moviesArrays);

    for (let i = 0; i < moviesArrays.length; i += 1) {
      if (i === page - 1) {
        console.log(moviesArrays[i]);
        const markup = renderMovie(moviesArrays[i]);
        return markup;
      }
    }
  });
}
