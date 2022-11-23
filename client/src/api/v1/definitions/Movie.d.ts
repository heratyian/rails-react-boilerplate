
export interface MovieQueryParams {
  query: string;
}

export interface MovieSearchResult {
  id: number;
  title: string | null;
  posterUrl: string | null;
}

export interface MovieIndex {
  results: MovieSearchResult[];
}
