import NewApiService from './apiServise.js';
import movieModalTemplate from '../templates/card-modal.hbs';
import errorUrl from '../images/something_went_wrong.webp';
import spinner from './spinner';
import { listElement, closeModalBtn, modal, movieModalCard } from '../js/refs';
import {
  onWatchedLibraryBtnClick,
  onQueueLibraryBtnClick,
  watchedLibrary,
  queueLibrary,
} from './newLocalStorage';

const newApiService = new NewApiService();

listElement.addEventListener('click', modalWindowOpenHandler);

async function modalWindowOpenHandler(event) {
  event.preventDefault();
  const movieID = event.target.dataset.id;

  if (watchedLibrary.includes(movieID)) {
    // console.log('it works');
    // watchedBtn.innerHTML = 'remove from watched';
  }

  if (queueLibrary.includes(movieID)) {
    // queueBtn.textContent = 'remove from watched';
  }

  closeModalBtn.addEventListener('click', modalWindowCloseHandler);
  modal.addEventListener('click', backdropClickHandler);
  window.addEventListener('keydown', escKeyPressHandler);
  modal.addEventListener('click', onWatchedLibraryBtnClick);
  modal.addEventListener('click', onQueueLibraryBtnClick);

  if (event.target.nodeName === 'UL') {
    document.body.style.overflow = '';
    return;
  }

  spinner();
  await renderMovieByID(movieID);
  modal.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
}

function modalWindowCloseHandler(event) {
  event.preventDefault();
  closeModalBtn.removeEventListener('click', modalWindowCloseHandler);
  modal.removeEventListener('click', backdropClickHandler);
  window.removeEventListener('keydown', escKeyPressHandler);
  modal.removeEventListener('click', onWatchedLibraryBtnClick);
  modal.removeEventListener('click', onQueueLibraryBtnClick);

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

async function renderMovieByID(movieID) {
  try {
    const movie = await newApiService.fetchMovieById(movieID);

    if (movie.genres.length > 2) {
      movie.genres = [...movie.genres.slice(0, 2), { name: 'Others' }];
    }

    movie.popularity = movie.popularity.toFixed(1);
    movieModalCard.innerHTML = movieModalTemplate(movie);
    const checkWatchedBtn = document.querySelector('.watched-library-button');
    const checkQueueBtn = document.querySelector('.queue-library-button');

    if (watchedLibrary.includes(movieID)) {
      checkWatchedBtn.innerHTML = 'remove from watched';
    }

    if (queueLibrary.includes(movieID)) {
      checkQueueBtn.innerHTML = 'remove from queue';
    }
  } catch (error) {
    console.log('error in function render');
    movieModalCard.innerHTML = `<img  src="${errorUrl}" />`;
  }
}
