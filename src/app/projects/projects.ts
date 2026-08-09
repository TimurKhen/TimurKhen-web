import { Component, inject, OnInit, signal } from '@angular/core';
import { SortSelector } from '../sort-selector/sort-selector';
import { MatIcon } from '@angular/material/icon';
import { TechnologyShower } from '../technology-shower/technology-shower';
import { GithubPublicRepos, GitHubRepo } from '../api/github-api/github-public-repos';
import { TranslatePipe } from '@ngx-translate/core';

export interface ProjectRepo {
  name: string;
  displayName: string;
  description: string;
  features: string[];
  clone_url: string;
  stargazers_count: number;
  updated_at: string;
  images: string[];
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  imports: [SortSelector, MatIcon, TechnologyShower, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  private githubService = inject(GithubPublicRepos);

  localReposData = [
    {
      name: 'kpTubeFront',
      displayName: 'KPTUBE',
      description: 'PROJECTS.REPOS.KPTUBE.DESC',
      features: ['PROJECTS.REPOS.KPTUBE.FEAT_1', 'PROJECTS.REPOS.KPTUBE.FEAT_2'],
      images: [
        'assets/images/kptube.png',
        'assets/images/kptube-1.png',
      ],
      technologies: ['Angular', 'TS', 'SCSS'],
    },
    {
      name: 'krutoy-toose',
      displayName: 'Krutoy Toose',
      description: 'PROJECTS.REPOS.KRUTOY.DESC',
      features: ['PROJECTS.REPOS.KRUTOY.FEAT_1', 'PROJECTS.REPOS.KRUTOY.FEAT_2'],
      images: ['assets/images/4_6.jpg'],
      technologies: ['Angular', 'TS'],
    },
    {
      name: 'snake3d',
      displayName: 'Snake 3D',
      description: 'PROJECTS.REPOS.SNAKE.DESC',
      features: [],
      images: ['assets/images/4_5.jpg', 'assets/images/snake-2.png'],
      technologies: ['JS', 'HTML', 'CSS'],
    },
    // {
    //   name: 'sber-solution',
    //   displayName: 'Sber solution',
    //   description: 'PROJECTS.REPOS.SBER.DESC',
    //   features: [],
    //   images: ['assets/images/sber-solution.png'],
    //   technologies: ['Angular', 'Python', 'SCSS'],
    // },
    // {
    //   name: 'technostrelka-2026',
    //   displayName: 'Technostrelka-2026',
    //   description: 'PROJECTS.REPOS.TECHNO.DESC',
    //   features: ['PROJECTS.REPOS.TECHNO.FEAT_1'],
    //   images: ['assets/images/technostrelka-26.png'],
    //   technologies: ['Angular', 'SCSS'],
    // },
  ];

  allRepos: ProjectRepo[] = [];
  repos = signal<ProjectRepo[]>([]);

  ngOnInit() {
    this.githubService.getRepos().subscribe((githubRepos: GitHubRepo[]) => {
      this.allRepos = this.localReposData.map((localData) => {
        const gitRepo = githubRepos.find(
          (r) => r.name.toLowerCase() === localData.name.toLowerCase(),
        );

        return {
          ...localData,
          clone_url:
            gitRepo?.html_url ||
            gitRepo?.clone_url ||
            `https://github.com/TimurKhen/${localData.name}`,
          stargazers_count: gitRepo?.stargazers_count || 0,
          updated_at: gitRepo?.updated_at || new Date(0).toISOString(),
        };
      });
      this.sortBy('stars');
    });
  }

  sortBy(criteria: 'stars' | 'update') {
    const sorted = [...this.allRepos];
    if (criteria === 'stars') {
      sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else {
      sorted.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    }
    this.repos.set(sorted);
  }

  updateList($event: any) {
    this.sortBy($event);
  }

  swapImage(item: any, indexToSwap: number) {
    const swapLogic = () => {
      const temp = item.images[0];
      item.images[0] = item.images[indexToSwap];
      item.images[indexToSwap] = temp;
    };

    if ('startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        swapLogic();
      });
    } else {
      swapLogic();
    }
  }
}
