import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from
'@angular/material/slide-toggle';
import { LoginComponent } from "./Components/login/login.component";
import { WorkoutDataComponent } from "./Components/workout-data/workout-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, LoginComponent, WorkoutDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Syncfit';
}
