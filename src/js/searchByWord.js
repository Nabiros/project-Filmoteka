import NewApiService from './apiServise';
import { searchInput, listElement } from './refs';
import filmCard from '../templates/film-cards.hbs';


const SearchFilmApiServis = new NewApiService();
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 400;

searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    const inputValue = e.target.value.trim();
    if (inputValue.length === 0) {
        SearchFilmApiServis.fetchPopularMovie();
        
    } else {
        SearchFilmApiServis.searchQuery = inputValue;
        SearchFilmApiServis.fetchByInputValue().then(data=>{
            appendFilmCardsMarkup(data.results);
            console.log(data);
        })
       
    }
}












