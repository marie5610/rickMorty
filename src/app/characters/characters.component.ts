import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CharacterService } from '../services/character.service';
import { all } from 'src/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  lupita: string = 'https://img.icons8.com/?size=512&id=47830&format=png';
  nextImg: string = 'https://img.icons8.com/?size=512&id=G0QIqS8RJwUf&format=png';
  backImg: string = 'https://img.icons8.com/?size=512&id=42775&format=png';
  page: number = 1;
  currentName: string = '';
  all: all = {
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

  constructor(
    private service: CharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPage();
    this.getName();
  }

  getPage(){
    this.route.paramMap.subscribe((params) => {
      const page = params.get('page');
      if (page) {
        this.page = +page;
        this.getCharacters(this.page.toString());
      }else {
        this.getCharacters('1');
      }
    });
  }

  getName() {
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      const page = params.get('page');
      if (name && page) {
        this.currentName = name;
        this.page = +page;
        this.getByName(this.currentName, this.page.toString());
      }
    });
  }

  getCharacters(page: string) {
    this.service.getAll(page).subscribe((data) => {
      this.all = data;
    });
  }

  getByName(name: string, page: string) {
    this.service.getByName(name, page).subscribe((data) => {
      this.all = data;
    });
  }

  redirect(id: number) {
    this.router.navigate([`character/${id}`]);
  }

  previous() {
    this.page--;
    this.nav();
    window.scrollTo(0, 0);
  }

  nav() {
    if (this.currentName) {
      this.router.navigate([`home/character/${this.currentName}/page=/${this.page}`]);
      this.getByName(this.currentName, this.page.toString());
    } else {
      this.router.navigate([`home/page=/${this.page}`]);
      this.getCharacters(this.page.toString());
    }
  }

  next() {
    this.page++;
    this.nav();
    window.scrollTo(0, 0);
  }
}
