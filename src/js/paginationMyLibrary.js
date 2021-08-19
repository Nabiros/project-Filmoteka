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
  console.log(moviesArrays[0]);
  const i = normalization(moviesArrays[0])
  renderMovie(i);
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
        const p = normalization(moviesArrays[i]);
        const markup = renderMovie(p);
        return markup;
      }
    }
  });
}
function genresList() {
  const listOfGenres = localStorage.getItem('listOfGenres');
  return JSON.parse(listOfGenres);
}


function normalization(data) {
  const result = data.map(movie => {
    const release_date = movie.release_date ? movie.release_date.split('-')[0] : '2020-00-00'; //добавьте проверку на корректность поля movie.release_date
    const genres = movie.genres ? movie.genres.map(ev => genresList().filter(el => el.id === ev.id)).flat() : 'n/a';
    return {
      ...movie,
      release_date: release_date,
      genres: genres,
    };
  });
  return result;
}


