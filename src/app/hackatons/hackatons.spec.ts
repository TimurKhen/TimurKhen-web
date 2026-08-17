import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hackatons } from './hackatons';

describe('Hackatons', () => {
  let component: Hackatons;
  let fixture: ComponentFixture<Hackatons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hackatons],
    }).compileComponents();

    fixture = TestBed.createComponent(Hackatons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
