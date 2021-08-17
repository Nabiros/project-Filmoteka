export default class Library {
    constructor() {
        this.page = 1;
        this.libraryInUse = null; 
    }

    getData(targetLibrary) {
        const storageData = localStorage.getItem(targetLibrary);

        if (storageData) {
            try {
                return JSON.parse(storageData);
            } catch (error) {
                 console.error("Get state error: ", error.message); 
            }
        }
        return null;
    }

    setData(data, targetLibrary) {
        const STORAGE_DATA = {
            library: [],
            total_results:1
        };

        let storageData = this.getData(targetLibrary);

    
        if (storageData) {
            storageData.library.push(data);
            storageData.total_results += 1;
        } else {
            storageData = { ...STORAGE_DATA };
            storageData.library.push(data);
        }

        localStorage.setItem(targetLibrary, JSON.stringify(storageData));
    }

    removeData(movieId, targetLibrary) {
        const storageData = this.getData(targetLibrary);

        if (!storageData || storageData.total_results === 0) {
            alert("No movies to display");
            return;
        }
        
        const isFound = storageData.library.find((el, index) => {
            if (el.id !== movieId) {
                return false;
            }
            
            storageData.library.splice(index, 1);
            storageData.total_results -= 1;
            return true;
        });

        if (!isFound) {
            alert('No such movie here');
            return;
        }
        localStorage.setItem(targetLibrary,JSON.stringify(storageData));  
    }

    isMovieInLibrary(movieId) {
        const library = {
            0: "watched",
            1: "queue"
        }

        const keys = Object.keys(library);
        let isAvailable = false;
        let targetLibrary = null;
        
        for (const key of keys) {
            const storageData = this.getData(library[key]);

            if (!storageData || storageData.total_results === 0) {
                continue;
            }

            storageData.library.find(el => {
                if (el.id !== movieId) return false;
                isAvailable = true;
                targetLibrary = library[key];
                return true;
            });

            if (isAvailable) {
                return { isAvailable, targetLibrary };
            }
        };

        return { isAvailable, targetLibrary };
    }    

    libraryInUse(libraryName) {
        this.libraryInUse = libraryName;
    }
}