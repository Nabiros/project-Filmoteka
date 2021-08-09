// (() => {
//   const refs = {
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.closeModalBtn.addEventListener('click', closeModal);

//   function closeModal() {
//     refs.modal.classList.add('visually-hidden');
//   }
// })();

const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');


closeModalBtn.addEventListener('click', closeModal);

  function closeModal() {
    modal.classList.add('visually-hidden');
  }
