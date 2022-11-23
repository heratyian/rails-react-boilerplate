import { stringify } from "qs";
import { API_URL } from "../constants";
import { MovieIndex, MovieQueryParams } from "./definitions/Movie";
import { MOVIE_INDEX } from "./routes";


export default class Movie {
  static async search(q: MovieQueryParams): Promise<MovieIndex> {
    const response = await fetch(API_URL + MOVIE_INDEX + '?' + stringify(q), {
      headers: {
        'Accept': 'application/json'
      },
      method: 'GET'
    });

    return await response.json();
  }
}
