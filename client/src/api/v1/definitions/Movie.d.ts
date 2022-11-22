
export interface MovieQueryParams {
  query: string;
}

export interface MovieIndex {
  id: number;
  title: string | null;
  posterUrl: string | null;
}
