import {
  headerInput,
  homeBtn,
  myLibraryBtn,
  headerStyle,
  libButtons,
  watchedBtn,
  queueBtn,
} from '../js/refs';
import { popularMovieRender } from './paginationRender';
import { renderWatched } from './paginationMyLibrary';
import { renderQueue } from './queueBtn';

homeBtn.addEventListener('click', onHomeBtnClick);
myLibraryBtn.addEventListener('click', onLibraryBtnClick);
watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

function onHomeBtnClick() {
  headerStyle.classList.replace('header-library-img', 'header-home-img');
  addClass(libButtons, 'is-hidden');
  addClass(homeBtn, 'current');
  removeClass(headerInput, 'is-hidden');
  removeClass(myLibraryBtn, 'current');

  popularMovieRender();
}

function onLibraryBtnClick() {
  headerStyle.classList.replace('header-home-img', 'header-library-img');
  addClass(headerInput, 'is-hidden');
  addClass(myLibraryBtn, 'current');
  removeClass(libButtons, 'is-hidden');
  removeClass(homeBtn, 'current');
  removeClass(queueBtn, 'current-btn');
  addClass(watchedBtn, 'current-btn');

  renderWatched();
}

function onWatchedBtnClick() {
  removeClass(queueBtn, 'current-btn');
  addClass(watchedBtn, 'current-btn');
  renderWatched();
}

function onQueueBtnClick() {
  removeClass(watchedBtn, 'current-btn');
  addClass(queueBtn, 'current-btn');
  renderQueue();
}

function removeClass(el, className) {
  el.classList.remove(className);
}

function addClass(el, className) {
  el.classList.add(className);
}
