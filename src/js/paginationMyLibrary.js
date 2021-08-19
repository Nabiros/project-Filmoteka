import { listElement, btnUp, paginationContainer } from '../js/refs';

import errorUrl from '../images/something_went_wrong.webp';
import { scrollPage } from './buttonUp.js';
import Pagination from 'tui-pagination';
import AOS from 'aos';
import { createPages } from './localStPages';
import 'aos/dist/aos.css';
import { options, renderMovie, dateAndGenreNormalization } from './paginationRender';
import { extractWatched } from './newLocalStorage';

AOS.init();

btnUp.addEventListener('click', scrollPage);

const pagination = new Pagination(paginationContainer, options);

export async function renderWatched() {
  const result = await extractWatched();

  if (result.length === 0) {
    listElement.innerHTML = `<img  src="${emptyImg}" />`;
  }
  pagination.reset(result.length);
  const moviesArrays = createPages(result);
  renderMovie(moviesArrays[0]);
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  listElement.innerHTML = '';

  scrollPage();
  getMovieArray(extractWatched, currentPage);
});

export function getMovieArray(extract, page) {
  extract().then(data => {
    if (data.length === 0) {
      listElement.innerHTML = `<img  src="${emptyImg}" />`;
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
