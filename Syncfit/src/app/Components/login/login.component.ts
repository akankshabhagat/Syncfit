import {Component} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  
  
} from '@angular/forms';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { WorkoutDataComponent } from '../workdata/workout-data.component';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule
    ,MatIconModule,
    MatTableModule,
     MatSortModule, 
     MatPaginatorModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})

export class LoginComponent {

  workoutForm: FormGroup;
  workoutList: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga'];
  constructor(private fb: FormBuilder) {
    this.workoutForm = this.fb.group({
      Username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      chosenworkouts: [[], Validators.required],
      workoutminutes: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      // Add other form controls here as needed
    });
  }
  clearAll() {
    this.workoutForm.get('username')?.setValue('');
    this.workoutForm.get('workoutminutes')?.setValue('');
    this.workoutForm.get('chosenworkouts')?.setValue([]);
  }

  // Method to handle form submission
  onSubmit() {
    if (this.workoutForm.valid) {
      console.log(this.workoutForm.value);
    }

  // get selectedWorkouts(): string {
  //   return this.workouts.value.join(', ');
  // }

}
}

