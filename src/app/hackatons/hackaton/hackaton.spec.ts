import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hackaton } from './hackaton';

describe('Hackaton', () => {
  let component: Hackaton;
  let fixture: ComponentFixture<Hackaton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hackaton],
    }).compileComponents();

    fixture = TestBed.createComponent(Hackaton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
