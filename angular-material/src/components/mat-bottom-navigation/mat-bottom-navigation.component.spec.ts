import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBottomNavigationComponent } from './mat-bottom-navigation.component';

describe('MatBottomNavigationComponent', () => {
  let component: MatBottomNavigationComponent;
  let fixture: ComponentFixture<MatBottomNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatBottomNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBottomNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
