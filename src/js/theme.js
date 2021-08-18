import { bodyEl, switchInputEl, modalEl} from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

reload();

switchInputEl.addEventListener('change', onSelectTheme);

function onSelectTheme(evt) {
  evt.preventDefault();

  bodyEl.classList.add(Theme.DARK);
  bodyEl.classList.toggle(Theme.LIGHT);

  modalEl.classList.add(Theme.DARK);
  modalEl.classList.toggle(Theme.LIGHT);

  if (bodyEl.classList.value === 'dark-theme') {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function reload() {
  const saveTheme = localStorage.getItem('theme');
  if (saveTheme) {
    if (saveTheme === 'dark-theme') {
      switchInputEl.checked = false;
      bodyEl.classList.add(Theme.DARK);
      modalEl.classList.add(Theme.DARK);

      localStorage.setItem('theme', Theme.DARK);
    } else {
      switchInputEl.checked = true;
      bodyEl.classList.add(Theme.LIGHT);
      modalEl.classList.add(Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }
}
