import FilmApiServis from './apiServise';
import refs from './refs';
import filmCard from '../templates/film-cards.hbs';
import Notiflix from 'Notiflix';
const { searchInput, listElement } = refs;

const SearchFilmApiServis = new FilmApiServis();
searchInput.addEventListener('submit', onSearchFilm)

async function onSearchFilm(e) {
    e.preventDefault();
    SearchFilmApiServis.resetPage();
    SearchFilmApiServis.query = e.currentTarget.elements.searchQuery.value;
    try {
        const result = await SearchFilmApiServis.fetchSearchMovie();
        if (SearchFilmApiServis.query.trim() === '') {
            clearFilmCard();
             Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and ')
        } else {
            appendFilmCardsMarkup(result.query);
            filmCard.refresh();
        }
    } catch (error) {
        console.log(error)
    }
}

function appendFilmCardsMarkup(data){
    listElement.insertAdjacentHTML('beforeend', cards(data));
};

function clearFilmCard () {
    listElement.innerHTML = '';
}