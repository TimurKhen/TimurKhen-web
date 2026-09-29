import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectFilterCategory, ProjectItem } from './project.model';
import { TechnologyShower } from '../technology-shower/technology-shower';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-projects',
  imports: [MatIconModule, TechnologyShower],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeFilter = signal<ProjectFilterCategory>('all');

  readonly allProjects = signal<ProjectItem[]>([
    {
      id: 'kptube',
      name: 'KPTube',
      category: 'web',
      description:
        'A high-performance video-player web application built with Angular and RxJS, featuring custom video playback controls.',
      techStack: ['Angular', 'TS', 'RxJS', 'SCSS'],
      githubUrl: 'https://github.com/TimurKhen/kpTubeFront',
      year: '2024 – 2026',
      status: 'Active Repository',
    },
    {
      id: 'sber-solution',
      name: 'FabricOfSolutions',
      category: 'hackathon',
      description:
        'Teams challenges solution in school 21 (Sber Hackathon task).',
      techStack: ['Angular', 'TS', 'SCSS', 'Docker'],
      githubUrl: 'https://github.com/TimurKhen/sber-solution',
      year: '2025 – 2026',
      status: 'Hackathon Nominee',
    },
    {
      id: 'krutoy-toose',
      name: 'Krutoy Toose',
      category: 'web',
      description:
        'Telegram Mini App Clicker - game with TMA Api connection.',
      techStack: ['Angular', 'TS', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/TimurKhen/krutoy-toose',
      year: '2024',
      status: 'Production MVP',
    },
    {
      id: 'gzgs',
      name: 'GZGS',
      category: 'web',
      description: 'Platform to control subscriptions (qualifying of Technostrelka 2026).',
      techStack: ['Angular', 'TS', 'SCSS', 'RxJS', 'TaigaUI'],
      githubUrl: 'https://github.com/TimurKhen/GZGS-frontend',
      year: '2026',
      status: 'Archived Release',
    },
    {
      id: 'angular-interface-to-io',
      name: 'Angular Interface to IO',
      category: 'tool',
      description:
        'VSCode extension that automatically parses TypeScript interfaces to generate Angular Input() and Output()',
      techStack: ['TS', 'JS'],
      githubUrl: 'https://github.com/TimurKhen/Angular-interface-to-io',
      year: '2026',
      status: 'Open Source Tool',
    },
  ]);

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const list = this.allProjects();
    if (filter === 'all') return list;
    return list.filter((p) => p.category === filter);
  });

  filterCounts = computed(() => {
    const list = this.allProjects();
    return {
      all: list.length,
      web: list.filter((p) => p.category === 'web').length,
      hackathon: list.filter((p) => p.category === 'hackathon').length,
      tool: list.filter((p) => p.category === 'tool').length,
    };
  });

  setFilter(filter: ProjectFilterCategory): void {
    this.activeFilter.set(filter);
  }
}
