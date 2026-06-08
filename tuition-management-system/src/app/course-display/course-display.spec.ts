import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDisplay } from './course-display';

describe('CourseDisplay', () => {
  let component: CourseDisplay;
  let fixture: ComponentFixture<CourseDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
