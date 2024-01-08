import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { all, character, episode } from 'src/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getAll(page: string): Observable<all> {
    return this.http.get<all>(`${this.url}?page=${page}`);
  }

  getOne(id: string){
    return this.http.get<character>(`${this.url}${id}`);
  }

  getEpisode(urlEpisode: string){
    return this.http.get<episode>(`${urlEpisode}`);
  }

  getByName(name: string, page: string){
    if (name) {
      return this.http.get<all>(`${this.url}?page=${page}&name=${name}`);
    } else {
      return this.http.get<all>(`${this.url}?page=${page}`);
    }
  }
}
