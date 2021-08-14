import refs from './refs';

import NewApiService from './apiServise.js';
import movieModalTemplate from '../templates/card-modal.hbs';
import errorUrl from '../images/something_went_wrong.webp';
import spinner from './spinner';

const { listElement, closeModalBtn, modal, movieModalCard } = refs;

const newApiService = new NewApiService();

listElement.addEventListener('click', modalWindowOpenHandler);

function modalWindowOpenHandler(event) {
  modal.classList.remove('visually-hidden');

  event.preventDefault();
  
  const movieID = event.target.dataset.id;
  // const movieID = event.target.dataset.action;
  
  closeModalBtn.addEventListener('click', modalWindowCloseHandler);
  modal.addEventListener('click', backdropClickHandler);
  window.addEventListener('keydown', escKeyPressHandler);
  
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    // if (event.target.tagName !== 'LI' && event.target.className !== 'card') {
  //   return;
  // }
    spinner();
  modal.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
  renderMovieByID(movieID);

}


function modalWindowCloseHandler(event) {
  event.preventDefault();
  closeModalBtn.removeEventListener('click', modalWindowCloseHandler);
  modal.removeEventListener('click', backdropClickHandler);
  window.removeEventListener('keydown', escKeyPressHandler);

  modal.classList.add('visually-hidden');
  movieModalCard.innerHTML = '';
  document.body.style.overflow = '';
}

function backdropClickHandler(event) {
  if (event.currentTarget === event.target) {
    modal.classList.add('visually-hidden');
    movieModalCard.innerHTML = '';
    document.body.style.overflow = '';
  }
}

function escKeyPressHandler(event) {
  if (event.code === 'Escape') {
    modal.classList.add('visually-hidden');
    movieModalCard.innerHTML = '';
    document.body.style.overflow = '';
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

