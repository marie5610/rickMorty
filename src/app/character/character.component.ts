import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../services/character.service';
import { character } from './../../models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character: character = {
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
  stat: string = '';

  episodes: string[] = [];

  constructor(
    private service: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
  }

  getId() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.getCharacter(id);
      }
    });
  }

  getCharacter(id: string) {
    this.service.getOne(id).subscribe((data) => {
      this.character = data;
      if (this.character) {
        this.getEpisode(this.character);
      }
    });
  }

  getEpisode(character: character) {
    for (let index = 0; index < character.episode.length; index++) {
      this.service.getEpisode(character.episode[index]).subscribe((data) => {
        this.episodes.push(data.episode, data.name);
      });
    }
  }

  status(status: string) {
    switch (status) {
      case 'Alive':
        return (this.stat =
          'https://img.icons8.com/?size=512&id=rAlxRoj0Ce7P&format=png');
      case 'Dead':
        return (this.stat =
          'https://img.icons8.com/?size=512&id=52148&format=png');
      default:
        return (this.stat =
          'https://img.icons8.com/?size=512&id=103807&format=png');
    }
  }
}
