import { btnUp } from '../js/refs';

function scrollPage() {
  window.scrollTo({
    top: document.documentElement.offsetTop,
    behavior: 'smooth',
  });
}
let scroll = 0;

window.addEventListener('scroll', function (e) {
  scroll = window.scrollY;
  if (scroll > 500) {
    btnUp.classList.remove('visually-hidden');
  }
  if (scroll === 0) {
    btnUp.classList.add('visually-hidden');
  }
});

export { scrollPage };
