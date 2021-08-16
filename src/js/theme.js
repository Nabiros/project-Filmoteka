// import NewApiService from './apiServise.js';
import '../partials/films-first-page';
import { bodyEl, switchInputEl } from './refs';

// const newApiService = new NewApiService();

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

reload();


console.log(bodyEl)



switchInputEl.addEventListener('change', onSelectTheme);

function onSelectTheme(evt) {
  evt.preventDefault();
  bodyEl.classList.add(Theme.DARK);
  bodyEl.classList.toggle(Theme.LIGHT);
  modal.classList.add(Theme.DARK);
  modal.classList.toggle(Theme.LIGHT);


  
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
    //    this.modal.classList.add(Theme.DARK);
       localStorage.setItem('theme', Theme.DARK);
     } else {
       switchInputEl.checked = true;
       bodyEl.classList.add(Theme.LIGHT);
    //    modal.classList.add(Theme.LIGHT);
       localStorage.setItem('theme', Theme.LIGHT);
     }
    }
  };