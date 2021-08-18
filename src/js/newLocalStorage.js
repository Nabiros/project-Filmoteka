export const watchedLibrary = JSON.parse(localStorage.getItem('watchedLibrary')) || [];
export const queueLibrary = JSON.parse(localStorage.getItem('queueLibrary')) || [];

export const onWatchedLibraryBtnClick = (e) => {
    if (e.target.className === 'watched-library-button') {

        const id = e.target.dataset.id;
        // console.log(id);
        
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
        console.log(id);
        
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