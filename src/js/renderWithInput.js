import { headerInputField, paginationContainer, listElement } from '../js/refs';
import errorUrl from '../images/something_went_wrong.webp';
import notFoundImg from '../images/404error.png';
import NewApiService from './apiServise';
import Pagination from 'tui-pagination';
import {
  options,
  popularMovieRender,
  renderMovie,
  dateAndGenreNormalization,
} from './paginationRender';
import { scrollPage } from './buttonUp.js';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const newApiService = new NewApiService();
const pagination = new Pagination(paginationContainer, options);

headerInputField.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {

    const inputValue = e.target.value.trim();
  if (inputValue.length === 0) {
    popularMovieRender();
      paginationContainer.style.display = 'block';

  }
  else {
    newApiService.searchQuery = inputValue;
    firstRenderOfMovie();
  }
  
}

function firstRenderOfMovie() {
  newApiService
    .fetchByInputValue(pagination.getCurrentPage())
    .then(data => {      
      if (data.total_results === 0) {
        Notiflix.Notify.failure('Sorry, there are no movies matching your search query. Please try again.');
        paginationContainer.style.display = 'none';
        throw new Error(data.status);
        
      }
      console.log(data);

      pagination.reset(data.total_pages);
      renderMovie(dateAndGenreNormalization(data));
      paginationContainer.style.display = 'block';

      
    })
    

    .catch(err => {      
      console.log('error in function render');
      listElement.innerHTML = `<img  src="${notFoundImg}" />`;
    });
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  listElement.innerHTML = '';

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
