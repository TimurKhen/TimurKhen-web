import { Component, signal } from '@angular/core';
import { SortMethod, SortSelector } from '../sort-selector/sort-selector';
import { Hackaton } from './hackaton/hackaton';
import { HackatonData } from './hackaton';

// Идея: сделать расширение позволяющее автоматически создавать input/output модели из interface просто выделив его

@Component({
  selector: 'app-hackatons',
  imports: [SortSelector, Hackaton],
  templateUrl: './hackatons.html',
  styleUrl: './hackatons.scss',
})
export class Hackatons {
  hackatons: HackatonData[] = [
    {
      name: 'PROD 2026',
      image: 'prod.svg',
      status: 'Finalist',
      color: null,
      icon: null,
    },
    {
      name: 'Technostrelka 2026',
      image: 'technostrelka.svg',
      status: '3 Place',
      color: null,
      icon: '3place.webp',
    },
  ];
  protected sortChange($event: SortMethod) {}
}
