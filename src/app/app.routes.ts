import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DialogContentExampleComponent } from './Components/dialog-content-example/dialog-content-example.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',

    },
    {
path:'login',
component:LoginComponent

    },
    {
        path:'login',
        component:DialogContentExampleComponent
    },
    {
path:'login',
component:ScheduleComponent
    }


];
