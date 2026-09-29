import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusShower } from './status-shower';

describe('StatusShower', () => {
  let component: StatusShower;
  let fixture: ComponentFixture<StatusShower>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusShower],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusShower);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
