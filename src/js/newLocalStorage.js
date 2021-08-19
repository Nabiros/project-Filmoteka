import { listElement, layout, paginationContainer } from './refs';
import NewApiService from './apiServise';

const newApiService = new NewApiService();
const wachedFilms = [];

export const watchedLibrary = JSON.parse(localStorage.getItem('watchedLibrary')) || [];
export const queueLibrary = JSON.parse(localStorage.getItem('queueLibrary')) || [];

export const onWatchedLibraryBtnClick = e => {
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
export const onQueueLibraryBtnClick = e => {
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

export async function extractWatched() {
  paginationContainer.style.display = 'inherit';
  const watchedLibrary = JSON.parse(localStorage.getItem('watchedLibrary')).map(Number);

  let watched = [];

  if (watchedLibrary.length === 0) {
    alert('No movies to display');
    paginationContainer.style.display = 'none';
  }
  for (const id of watchedLibrary) {
    watched.push(await newApiService.fetchMovieById(id));
  }
  return watched;
}

export async function extractQueue() {
  paginationContainer.style.display = 'inherit';
  const queueLibrary = JSON.parse(localStorage.getItem('queueLibrary')).map(Number);

  let queue = [];

  if (queueLibrary.length === 0) {
    alert('No movies to display');
    paginationContainer.style.display = 'none';
  }
  for (const id of queueLibrary) {
    queue.push(await newApiService.fetchMovieById(id));
  }
  return queue;
}
