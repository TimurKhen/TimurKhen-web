import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSelector } from './sort-selector';

describe('SortSelector', () => {
  let component: SortSelector;
  let fixture: ComponentFixture<SortSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(SortSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
