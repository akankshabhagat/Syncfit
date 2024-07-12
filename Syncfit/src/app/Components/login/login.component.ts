import {Component} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  
} from '@angular/forms';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';


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
    ,MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})

export class LoginComponent {
  value=' ';
  // protected readonly value = signal('');
 
  // protected onInput(event: Event) {
  //   this.value.set((event.target as HTMLInputElement).value);

  // }
  usernameFC=new FormControl('',[Validators.required]);
  workouts = new FormControl<string[]>([], { validators: Validators.required, nonNullable: true });
  workoutList: string[] = ['Cycling', 'Jogging', 'Swimming', 'Yoga', 'Other'];

  get selectedWorkouts(): string {
    return this.workouts.value.join(', ');
  }
}
