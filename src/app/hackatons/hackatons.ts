import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Hackaton } from './hackaton/hackaton';
import { HackatonData } from './hackaton';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hackatons',
  imports: [Hackaton, MatIconModule],
  templateUrl: './hackatons.html',
  styleUrl: './hackatons.scss',
})
export class Hackatons {
  readonly hackatons = signal<HackatonData[]>([
    {
      id: 'technostrelka-2026',
      name: 'Technostrelka 2026',
      image: 'technostrelka.svg',
      status: '3rd Place Award',
      placementTag: '🏆 3rd Place',
      placementType: 'podium',
      color: 'linear-gradient(135deg, rgba(226, 180, 125, 0.25), rgba(217, 119, 87, 0.15))',
      icon: '3place.webp',
      year: '2026',
      description: 'Solved Sber task of landing platform. Solved with GZG Team.',
      solutionSummary: 'Created landing with review system. Used design map of sber.',
      technologies: ['Angular', 'TS', 'Docker', 'SCSS', 'RxJS'],
      metrics: [
        { label: 'Award', value: '3rd Place' },
        { label: 'Duration', value: '72 Hours' },
        { label: 'Scope', value: 'International' },
      ],
    },
    {
      id: 'prod-2026',
      name: 'PROD Olympiad 2026',
      image: 'prod.svg',
      status: 'National Finalist',
      placementTag: 'Finalist',
      placementType: 'finalist',
      color: 'linear-gradient(135deg, rgba(238, 216, 203, 0.2), rgba(217, 119, 87, 0.1))',
      icon: null,
      year: '2026',
      description: 'Solved track: "Кэшбеки" | "Cashbacks". Solved with G3 Team.',
      solutionSummary:
        'Created splited admin page (web) and client (mobile). ' +
        'Admin page give ability of settings and creating multiple admins' +
        'Style created with using Taiga-UI.',
      technologies: ['Angular', 'TS', 'Docker', 'SCSS', 'RxJS', 'TaigaUI'],
      metrics: [
        { label: 'Standing', value: 'Finalist' },
        { label: 'Scope', value: 'International' },
      ],
    },
  ]);
}
