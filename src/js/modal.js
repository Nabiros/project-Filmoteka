const galleryFilms = document.querySelector('.js-card');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

galleryFilms.addEventListener('click', modalWindowOpenHandler);

function modalWindowOpenHandler(event) {
  event.preventDefault();
  closeModalBtn.addEventListener('click', modalWindowCloseHandler);
  modal.addEventListener('click', backdropClickHandler);
  window.addEventListener('keydown', escKeyPressHandler);

    if (event.target.nodeName !== 'IMG') {
        return;
    }
   modal.classList.remove('visually-hidden');

}


function modalWindowCloseHandler() {
  closeModalBtn.removeEventListener('click', modalWindowCloseHandler);
  modal.removeEventListener('click', backdropClickHandler);
  window.removeEventListener('keydown', escKeyPressHandler);
      
  modal.classList.add('visually-hidden');
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
