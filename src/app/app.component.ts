import { Component } from '@angular/core';
import { todo, personaje } from './character.model';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rickMorty';

  todo: todo = {
    info: { count: 0, pages: 0, next: '', prev: null },

    results: [
      {
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: { name: '', url: '' },
        location: { name: '', url: '' },
        image: '',
        episode: [],
        url: '',
        created: '',
      },
    ],
  };

  personajeDetalle: personaje = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: { name: '', url: '' },
    location: { name: '', url: '' },
    image: '',
    episode: [],
    url: '',
    created: '',
  };

  showDetail = false;

  constructor(private service: CharactersService) {}

  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe((data) => {
      this.todo = data;
    });
  }
  toggleShowDetail() {
    this.showDetail = !this.showDetail;
  }
  onShowDetail(id: number) {
    this.service.getPersonaje(id).subscribe((data) => {
      this.personajeDetalle = data;
      console.log(this.personajeDetalle);
      this.toggleShowDetail();
    });
  }
}
