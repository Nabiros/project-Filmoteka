import { headerInput, homeBtn, myLibraryBtn, headerStyle, libButtons, watchedBtn, queueBtn, listElement } from '../js/refs';
import { extractWatched, extractQueue } from './newLocalStorage';
import movieCards from '../templates/film-cards.hbs';

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
}

function onLibraryBtnClick() {
  headerStyle.classList.replace('header-home-img', 'header-library-img');
  addClass(headerInput, 'is-hidden');
  addClass(myLibraryBtn, 'current');
  removeClass(libButtons, 'is-hidden');
  removeClass(homeBtn, 'current');

  extractWatched();
}

function onWatchedBtnClick() {
  addClass(watchedBtn, 'current');
  removeClass(queueBtn, 'current');

  extractWatched();
}

function onQueueBtnClick() {
  addClass(queueBtn, 'current');
  removeClass(watchedBtn, 'current');

  extractQueue();
}

function removeClass(el, className) {
  el.classList.remove(className);
}

function addClass(el, className) {
  el.classList.add(className);
}