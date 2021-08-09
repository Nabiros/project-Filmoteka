const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');


closeModalBtn.addEventListener('click', closeModal);

  function closeModal() {
    modal.classList.add('visually-hidden');
  }
