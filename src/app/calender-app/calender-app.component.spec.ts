import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderAppComponent } from './calender-app.component';

describe('CalenderAppComponent', () => {
  let component: CalenderAppComponent;
  let fixture: ComponentFixture<CalenderAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
