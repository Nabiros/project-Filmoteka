import refs from './refs';
import movieCards from '../templates/film-cards.hbs';
import NewApiService from './apiServise';
import errorUrl from '../images/something_went_wrong.webp';
import upButtonHandler from './buttonUp.js';
import Pagination from 'tui-pagination';

const { listElement, btnUp, paginationContainer } = refs;

btnUp.addEventListener('click', upButtonHandler);

const newApiService = new NewApiService();

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
    renderMovie(data.results);
  })
  .catch(err => {
    console.log('error in function render');
    listElement.innerHTML = `<img  src="${errorUrl}" />`;
  });

pagination.on('afterMove', event => {
  const currentPage = event.page;
  scrollPage();
  newApiService
    .fetchPopularMovie(currentPage)
    .then(data => {
      renderMovie(data.results);
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

function scrollPage() {
  window.scrollTo({
    top: document.documentElement.offsetTop,
    behavior: 'smooth',
  });
}

// // Рендер первой старницы
// export function render() {
//   newApiService.page = 1;
//   newApiService
//     .addGenresToMovieObj()
//     .then(renderFilms)
//     .catch(err => {
//       console.log('error in function render');
//       listElement.innerHTML = `<img  src="${errorUrl}" />`;
//     });
// }
