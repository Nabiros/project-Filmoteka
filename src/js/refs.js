const listElement = document.querySelector('.js-card');
const btnUp = document.querySelector('.btnUp');

const headerInput = document.querySelector('.header-input');
const headerInputField = document.querySelector('.header-input__field');
const homeBtn = document.querySelector('.header-home__btn');
const myLibraryBtn = document.querySelector('.header-library__btn');
const headerStyle = document.querySelector('header');
const libButtons = document.querySelector('.library-buttons');
const listOfStudents = document.querySelector('.footer-text-dec');
const watchedBtnModal = document.querySelector('[data-name="watched-modal"]');
const queueBtnModal = document.querySelector('[data-name="queue-modal"]');

const layout = document.querySelector('.cards-list');

const closeModalBtn = document.querySelector('.js-close-btn');
const modal = document.querySelector('.js-backdrop');
const movieModalCard = document.querySelector('.js-card-modal');

const paginationContainer = document.getElementById('tui-pagination-container');

const bodyEl = document.querySelector('body');
const switchInputEl = document.querySelector('.theme-switch__toggle');
const modalEl = document.querySelector('.modal-window');

const watchedBtn = document.querySelector('[data-name="watched"]');
const queueBtn = document.querySelector('[data-name="queue"]');
const searchInput = document.querySelector('.header-input__field');
const wrapperEl = document.querySelector('.wrapper');

export {
  listElement,
  btnUp,
  watchedBtnModal,
  queueBtnModal,
  layout,
  headerInput,
  headerInputField,
  homeBtn,
  myLibraryBtn,
  headerStyle,
  libButtons,
  closeModalBtn,
  modal,
  movieModalCard,
  paginationContainer,
  bodyEl,
  switchInputEl,
  modalEl,
  listOfStudents,
  watchedBtn,
  queueBtn,
  searchInput,
  wrapperEl
};
