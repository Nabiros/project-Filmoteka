const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `98821d28938ee5f201a6b9b7afe95fef`;
export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  
  async fetchPopularMovie() {
    const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
    const response = await fetch(url);
    const { results } = await response.json();
    return results;
  }

  async fetchSearchMovie() {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    const response = await fetch(url);
    const { results } = await response.json();
    return results;
  }
 
  async fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.genres;
  }

  async addGenresToMovieObj() {
    const data = await this.fetchPopularMovie();
    const genresList = await this.fetchGenres();
    return data.map(movie => ({
      ...movie,
      release_date: movie.release_date.split('-')[0],
      genres: movie.genre_ids
        .map(id => genresList.filter(el => el.id === id))
        .flat(),
    }));
  }

  //  resetPage () {
  //       this.page = 1;
  //   };


  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get pageNum() {
    return this.page;
  }
  set pageNum(newPage) {
    this.page = newPage;
  }
}

