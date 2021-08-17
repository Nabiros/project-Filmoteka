import Library from './localStorage';

const library = new Library(); 

export const onModalLibraryBtnClick = e => {
  const el = e.target;

  const setOfLibraryBtns = el.dataset.name === 'watched' || el.dataset.name === 'queue';

  if (el.nodeName !== 'BUTTON' || !setOfLibraryBtns) {
    return;
  }

  const libraryBtns = {
    watched: e.target.parentNode.querySelector('[data-name="watched"]'),
    queue: e.target.parentNode.querySelector('[data-name="queue"]'),
  };

  const movieId = Number(e.target.dataset.id);
  const targetMovie = getMovie(movieId);
  let targetLibrary;
  let nonTargetBtn;

  if (el.dataset.name === 'watched') {
    targetLibrary = 'watched';
    nonTargetBtn = libraryBtns.queue;
  } else {
    targetLibrary = 'queue';
    nonTargetBtn = libraryBtns.watched;
  }

  const isActive = el.dataset.active;

  if (isActive === 'true') {
    library.setData(targetMovie, targetLibrary);
    el.dataset.active = 'false';
    el.textContent = `remove from ${targetLibrary}`;
    // nonTargetBtn.setAttribute('disabled', '');
  } else {
    const currentLibrary = getActiveLibrary();
    library.removeData(movieId, targetLibrary, currentLibrary);
    el.dataset.active = 'true';
    el.textContent = `add to ${targetLibrary}`;
    // nonTargetBtn.removeAttribute('disabled');
  }
};

export const isMovieInLibrary = (watchBtn, queueBtn, movieId) => {
  const isInLibrary = library.availabilityChecking(movieId);

  if (isInLibrary.isAvailable) {
    if (isInLibrary.targetLibrary === 'watched') {
      changeBtnValues(watchBtn, queueBtn, isInLibrary.targetLibrary);
    } else {
      changeBtnValues(queueBtn, watchBtn, isInLibrary.targetLibrary);
    }
  }
};

const changeBtnValues = (btnToActivate, btnToMute, targetLibrary) => {
  btnToActivate.dataset.active = 'false';
  btnToActivate.removeAttribute('disabled');
  btnToActivate.textContent = `Remove from ${targetLibrary}`;
  
  btnToMute.dataset.active = 'true';
  btnToMute.setAttribute('disabled', '');
};


const getMovie = function (id) {
    const movies = sessionStorage.getItem('movies');
    if (movies) {
      try {
        const isMovie = JSON.parse(movies).find(movie => movie.id === id);
        if (isMovie) {
          return isMovie;
        }
      } catch (error) {
        console.error('Get state error: ', error.message);
      }
    }
    return null;
  };
  
  const getActiveLibrary = function () {
    const libraryName = document.querySelector('header-home__btn current').dataset.name;
    return libraryName;
  };