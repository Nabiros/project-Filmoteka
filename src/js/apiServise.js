import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `98821d28938ee5f201a6b9b7afe95fef`;
export default class NewApiService {
  constructor() {
    this.searchQuery = '';
  }

  async fetchPopularMovie(page) {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${page}`,
    );
    return response.data;
  }

  async fetchByInputValue() {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`,
    );
    return response.data;
  }

  async fetchByGenres() {
    const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${KEY}`);
    return response.data.genres;
  }

  async addGenresToMovieObj() {
    const data = await this.fetchPopularMovie();
    const genresList = await this.fetchByGenres();
    return data.map(movie => ({
      ...movie,
      release_date: movie.release_date.split('-')[0],
      genres: movie.genre_ids.map(id => genresList.filter(el => el.id === id)).flat(),
    }));
  }

  async fetchMovieById(movie_id) {
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}?api_key=${KEY}&language=en-US`);
    return response.data;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
