import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  rick: string = 'https://img.icons8.com/?size=512&id=udMvpkRHbzzS&format=png';
  lupita: string = 'https://img.icons8.com/?size=512&id=42848&format=png';
  name: string = '';

  constructor(private readonly router: Router) {}

  onSearch(name: string, page: number) {
    this.router.navigate([`home/character/${name}/page=/${page}`]);
    this.name = '';
  }
}
