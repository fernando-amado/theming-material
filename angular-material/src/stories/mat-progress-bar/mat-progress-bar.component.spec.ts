import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressBar } from './mat-progress-bar.component';

describe('MatProgressBar', () => {
  let component: MatProgressBar;
  let fixture: ComponentFixture<MatProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatProgressBar ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatProgressBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
