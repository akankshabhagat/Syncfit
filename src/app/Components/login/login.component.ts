import {
  Component,
  ChangeDetectionStrategy,

} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';

import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {  MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogContentExampleComponent } from '../dialog-content-example/dialog-content-example.component';
import {
  MatDialogConfig,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DatatableService } from '../datatable.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
   

   
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  workoutForm: FormGroup;
  workoutList: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Other'];

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private api: DatatableService,

  ) {
    this.workoutForm = this.fb.group({
      Username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      chosenworkouts: [[], Validators.required],
      workoutminutes: [
        '',
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
  }

  clearAll() {
    this.workoutForm.get('Username')?.setValue('');
    this.workoutForm.get('workoutminutes')?.setValue('');
    this.workoutForm.get('chosenworkouts')?.setValue([]);
  }

  get selectedWorkouts(): string {
   const chosenWorkouts=this.workoutForm.get('chosenworkouts')?.value;
return chosenWorkouts? chosenWorkouts.join(','):'';
  }

  onSubmit(): void {
    if (this.workoutForm.valid) {
      const obj = this.workoutForm.value;
      this.api.postUsers(obj).subscribe({
        next: (response) => {
          this.openDialog();
          this.workoutForm.reset();
        },
        error: (error) => {
          console.error('Error submitting', error);
        },
      });
      
    } else {
    
    }
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px';
    dialogConfig.data = {
      message: 'Your workout has been added successfully!',
    };

    this.dialog.open(DialogContentExampleComponent, dialogConfig)
  }
  
}
