import refs from './refs';

const {headerInput, homeBtn, myLibraryBtn, headerStyle, libButtons} = refs;

homeBtn.addEventListener('click', onHomeBtnClick);
myLibraryBtn.addEventListener('click', onLibraryBtnClick);

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
}

function removeClass(el, className) {
  el.classList.remove(className);
}

function addClass(el, className) {
  el.classList.add(className);
}
