import {Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule ,FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';





@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  
})

export class LoginComponent {

}
