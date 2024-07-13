import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { WorkoutDataComponent } from './Components/workdata/workout-data.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',

    },
    {
path:'login',
component:LoginComponent,

    },
    {
        path:'workdata',
        component:WorkoutDataComponent
    }


];
