import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs';

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  pushed_at: string;
  description: string | null;
  language: string;
  clone_url: string;
}

@Service()
export class GithubPublicRepos {
  private http = inject(HttpClient)

  getRepos() {
    const url = `https://api.github.com/users/TimurKhen/repos?per_page=100`;

    return this.http.get<GitHubRepo[]>(url).pipe(
      map((repos) => repos.filter((repo) => repo.name !== 'TimurKhen')),
    )
  }
}
