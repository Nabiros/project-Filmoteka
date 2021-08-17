import { headerInputField, paginationContainer, listElement } from '../js/refs';
import errorUrl from '../images/something_went_wrong.webp';
import NewApiService from './apiServise';
import Pagination from 'tui-pagination';
import {
  options,
  popularMovieRender,
  renderMovie,
  dateAndGenreNormalization,
} from './paginationRender';
import { scrollPage } from './buttonUp.js';

const newApiService = new NewApiService();
const pagination = new Pagination(paginationContainer, options);

headerInputField.addEventListener('input', renderWithInputValue);

function renderWithInputValue(e) {
  const inputValue = e.target.value.trim();

  if (inputValue.length === 0) {
    popularMovieRender();
  } else {
    newApiService.searchQuery = inputValue;
    firstRenderOfMovie();
  }
}

function firstRenderOfMovie() {
  newApiService
    .fetchByInputValue(pagination.getCurrentPage())
    .then(data => {
      pagination.reset(data.total_pages);
      renderMovie(dateAndGenreNormalization(data));
    })
    .catch(err => {
      console.log('error in function render');
      listElement.innerHTML = `<img  src="${errorUrl}" />`;
    });
}

pagination.on('afterMove', event => {
  const currentPage = event.page;

  newApiService
    .fetchByInputValue(currentPage)
    .then(data => {
      renderMovie(dateAndGenreNormalization(data));
    })
    .catch(err => {
      console.log('error in function render');
      listElement.innerHTML = `<img  src="${errorUrl}" />`;
    });

  scrollPage();
});
