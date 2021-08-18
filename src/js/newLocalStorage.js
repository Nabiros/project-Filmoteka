import movieCards from '../templates/film-cards.hbs';
import { listElement, layout } from './refs';
import NewApiService from './apiServise';

const newApiService = new NewApiService();

export const watchedLibrary = JSON.parse(localStorage.getItem('watchedLibrary')) || [];
export const queueLibrary = JSON.parse(localStorage.getItem('queueLibrary')) || [];

export const onWatchedLibraryBtnClick = (e) => {
    if (e.target.className === 'watched-library-button') {

        const id = e.target.dataset.id;
        
        const index = watchedLibrary.indexOf(id);

        if (index == -1) {

        watchedLibrary.push(id);
        localStorage.setItem('watchedLibrary', JSON.stringify(watchedLibrary));
        e.target.textContent = 'remove from watched';

        } else {

        watchedLibrary.splice(index, 1);
        e.target.textContent = 'add to watched';
        }

        localStorage.setItem('watchedLibrary', JSON.stringify(watchedLibrary));
    }    
};

export const onQueueLibraryBtnClick = (e) => {
    if (e.target.className === 'queue-library-button') {

        const id = e.target.dataset.id;
        
        const index = queueLibrary.indexOf(id);
        
        if (index == -1) {

        queueLibrary.push(id);
        localStorage.setItem('queueLibrary', JSON.stringify(queueLibrary));
        e.target.textContent = 'remove from queue';

        } else {

        queueLibrary.splice(index, 1);
        e.target.textContent = 'add to queue';
        }

        localStorage.setItem('queueLibrary', JSON.stringify(queueLibrary));
    }    
};

export const extractWatched = () => {
    clearMarkup(layout);
    watchedLibrary;
    console.log(watchedLibrary);
    if (watchedLibrary.length === 0) {
        layout.insertAdjacentHTML('beforeend', "No movies to display");        
    }
    
    watchedLibrary.forEach(storedMovie => {
        console.log(storedMovie);
        const getStoredMovie = newApiService.fetchMovieById(storedMovie);
        console.log(getStoredMovie);

        const markup = movieCards(getStoredMovie);
        listElement.innerHTML = markup;
        return markup;
    })
}

export const extractQueue = () => {
    clearMarkup(layout);
    queueLibrary;
    console.log(queueLibrary);
    if (queueLibrary.length === 0) {
        layout.insertAdjacentHTML('beforeend', "No movies to display");       
    }
    console.log('queue');
}

const clearMarkup = el => {
    el.innerHTML = '';
};

