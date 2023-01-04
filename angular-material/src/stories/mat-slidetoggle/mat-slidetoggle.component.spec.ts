import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlidetoggleComponent } from './mat-slidetoggle.component';

describe('MatSlidetoggleComponent', () => {
  let component: MatSlidetoggleComponent;
  let fixture: ComponentFixture<MatSlidetoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSlidetoggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSlidetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
