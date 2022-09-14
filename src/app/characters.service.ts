import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { todo, personaje } from './character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAllPersonajes() {
    return this.http.get<todo>(this.url);
  }
  getPersonaje(id: number) {
    return this.http.get<personaje>(`${this.url}/${id}`);
  }
}
