import cardFilms from '../templates/film-cards.hbs';
import NewApiService from './apiServise';
import errorUrl from '../images/something_went_wrong.webp';
import upButtonHandler from '../js/buttonUp.js';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const listElement = document.querySelector('.js-card');
const logoEl = document.querySelector('.js-main-logo');
// console.log(logoEl)
const btnUp = document.querySelector('.btnUp');
btnUp.addEventListener('click', upButtonHandler);

const newApiService = new NewApiService();

// pagination

// pagination

render();

logoEl.addEventListener('click', onLogoClick);

// вызывается при клике по логотипу
function onLogoClick(e) {
  e.preventDefault();
  render();
}

// Рендер первой старницы
export function render() {
  newApiService.page = 1;
  newApiService
    .addGenresToMovieObj()
    .then(renderFilms)
    .catch(err => {
      console.log('error in function render');
      listElement.innerHTML = `<img  src="${errorUrl}" />`;
    });
}

// Для добавления разметки
function renderFilms(movie) {
  listElement.innerHTML = cardFilms(movie);
}
