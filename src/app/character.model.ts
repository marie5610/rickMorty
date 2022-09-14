export interface origen{
  name: string;
  url: string;
}
export interface ubicacion{
  name: string;
  url: string;
}
export interface personaje{
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: origen;
  location: ubicacion;
  image: string;
  episode: [];
  url: string;
  created: string;
}
export interface info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface todo{
  info: info;
  results: personaje[];
}
