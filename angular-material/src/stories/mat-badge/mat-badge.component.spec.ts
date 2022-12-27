import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBadgeComponent } from './mat-badge.component';

describe('MatBadgeComponent', () => {
  let component: MatBadgeComponent;
  let fixture: ComponentFixture<MatBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
