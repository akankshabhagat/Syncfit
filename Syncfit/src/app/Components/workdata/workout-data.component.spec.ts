import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDataComponent } from './workout-data.component';

describe('WorkoutDataComponent', () => {
  let component: WorkoutDataComponent;
  let fixture: ComponentFixture<WorkoutDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
