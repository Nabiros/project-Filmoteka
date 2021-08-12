import NewApiService from './apiServise.js';  
import movieModalTemplate from '../templates/card-modal.hbs';
import errorUrl from '../images/something_went_wrong.webp';

const galleryFilms = document.querySelector('.js-card');
const closeModalBtn = document.querySelector('.js-close-btn');
const modal = document.querySelector('.js-backdrop');
const movieModalCard = document.querySelector('.js-card-modal');

const newApiService = new NewApiService();

galleryFilms.addEventListener('click', modalWindowOpenHandler);

function modalWindowOpenHandler(event) {
  event.preventDefault();
  const movieID = event.target.dataset.id;

  closeModalBtn.addEventListener('click', modalWindowCloseHandler);
  modal.addEventListener('click', backdropClickHandler);
  window.addEventListener('keydown', escKeyPressHandler);

    if (event.target.nodeName !== 'IMG') {
        return;
    }
  modal.classList.remove('visually-hidden');
  renderMovieByID(movieID);

}


function modalWindowCloseHandler() {
  closeModalBtn.removeEventListener('click', modalWindowCloseHandler);
  modal.removeEventListener('click', backdropClickHandler);
  window.removeEventListener('keydown', escKeyPressHandler);
      
  modal.classList.add('visually-hidden');
  movieModalCard.innerHTML = '';
}

function backdropClickHandler(event) {
  if (event.currentTarget === event.target) {
      modal.classList.add('visually-hidden');
  }
}

function escKeyPressHandler(event) {
  if (event.code === 'Escape') {
      modal.classList.add('visually-hidden');
  }
}


export function renderMovieByID(movieID) {
  newApiService
    .fetchMovieById(movieID)
    .then(renderMovieModal)
    .catch(err => {
      console.log('error in function render');
      movieModalCard.innerHTML = `<img  src="${errorUrl}" />`;
    });
}


function renderMovieModal(movie) {
  movieModalCard.innerHTML = movieModalTemplate(movie);
}

