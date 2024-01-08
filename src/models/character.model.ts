export interface origin{
  name: string;
  url: string;
}
export interface location{
  name: string;
  url: string;
}
export interface character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: origin;
  location: location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface all{
  info: info;
  results: character[];
}
export interface episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
  url: string;
  created: string;
}
