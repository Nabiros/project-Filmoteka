import movieCards from '../templates/film-cards.hbs';
import { listElement, layout, paginationContainer } from './refs';
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
    paginationContainer.style.display = 'inherit';
    watchedLibrary;
    // console.log(watchedLibrary);

    if (watchedLibrary.length === 0) {
        alert('No movies to display');
        // clearMarkup(layout);
        // layout.insertAdjacentHTML('beforeend', "No movies to display");
        paginationContainer.style.display = 'none';        
    }
    
    watchedLibrary.forEach(storedMovie => {
        console.log(storedMovie);
        const getStoredMovie = newApiService.fetchMovieById(storedMovie);
        // console.log(getStoredMovie);

        getStoredMovie.then(data => {
            const markup = [];
            console.log(data);
            markup.push(data);
            console.log(markup);
            const layout = movieCards(markup)
            listElement.innerHTML = layout;
            // appendMarkup(listElement, markup);
        })
        .catch(error => {
            console.log(error);
        });
    })
}

export const extractQueue = () => {    
    paginationContainer.style.display = 'inherit';
    queueLibrary;
    // console.log(queueLibrary);

    if (queueLibrary.length === 0) {
        alert('No movies to display');
        // layout.insertAdjacentHTML('beforeend', "No movies to display");
        paginationContainer.style.display = 'none';
    }
    queueLibrary.forEach(storedMovie => {
        // console.log(storedMovie);
        const getStoredMovie = newApiService.fetchMovieById(storedMovie);
        // console.log(getStoredMovie);

        getStoredMovie.then(data => {
            const markup = movieCards(data);
            // console.log(markup);
            appendMarkup(listElement, markup);
        })
        .catch(error => {
            console.log(error);
        });

        // appendMarkup(listElement, markup);
    })
}

// const appendMarkup = (el, data) => {
//     // clearedEl.innerHTML = inherit;
//     el.innerHTML = data;
// };

// const clearMarkup = el => {
//     el.innerHTML = '';
// };
