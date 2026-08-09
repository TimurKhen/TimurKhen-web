import { TestBed } from '@angular/core/testing';

import { GithubPublicRepos } from './github-public-repos';

describe('GithubPublicRepos', () => {
  let service: GithubPublicRepos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubPublicRepos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
