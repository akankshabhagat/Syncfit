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
import { ErrorStateMatcher } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatToolbarModule,ReactiveFormsModule,MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})

export class LoginComponent {
  protected readonly value = signal('');
 
  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);

  }
workouts = new FormControl(Validators.required);
  
workoutList: string[]=['Cycling','Jogging','Swimming','Yoga','Other'];

}
