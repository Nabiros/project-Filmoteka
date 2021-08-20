import { body, inputCheckbox, modalEl} from './refs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

body.classList.add
(localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,);

if (body.classList.value === Theme.DARK) {
    inputCheckbox.checked = false;
}

const checkedTheme = event => {
    if (event.target.checked){
        localStorage.setItem('theme', Theme.DARK);
        body.classList.replace(Theme.LIGHT,Theme.DARK);
        modalEl.classList.replace(Theme.LIGHT,Theme.DARK);
    return;
    }

    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    modalEl.classList.add(Theme.LIGHT);
    modalEl.classList.remove(Theme.DARK);
};

inputCheckbox.addEventListener('change', checkedTheme);