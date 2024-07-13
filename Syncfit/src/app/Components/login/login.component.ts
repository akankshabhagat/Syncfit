import { Component ,ChangeDetectionStrategy, signal,inject,AfterViewInit, ViewChild,} from '@angular/core';
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

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

import { DialogContentExampleComponent } from '../dialog-content-example/dialog-content-example.component';
import {
  
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatDialogConfig,
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { resolve } from 'path';
import { response } from 'express';
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
    MatDialogModule
    

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  workoutForm: FormGroup;
  workoutList: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Other'];

  constructor(private fb: FormBuilder, private dialog: MatDialog,) {
    this.workoutForm = this.fb.group({
      Username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      chosenworkouts: [[], Validators.required],
      workoutminutes: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    });
  }

  clearAll() {
    this.workoutForm.get('Username')?.setValue('');
    this.workoutForm.get('workoutminutes')?.setValue('');
    this.workoutForm.get('chosenworkouts')?.setValue([]);
  }

  get selectedWorkouts(): string {
    return this.workoutForm.get('chosenworkouts')?.value.join(', ');
  }



  onSubmit(): void {
    if (this.workoutForm.valid) {
      const obj=this.workoutForm.value;
      console.log(obj);
      this.openDialog();
  
    } else {
      // Handle invalid form submission if needed
    }
  }

  
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px';
    dialogConfig.data = {
      message: 'Your workout has been added successfully!'
    };

    this.dialog.open(DialogContentExampleComponent, dialogConfig);
    
  }
}



