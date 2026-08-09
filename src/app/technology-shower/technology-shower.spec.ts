import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyShower } from './technology-shower';

describe('TechnologyShower', () => {
  let component: TechnologyShower;
  let fixture: ComponentFixture<TechnologyShower>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyShower],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyShower);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
