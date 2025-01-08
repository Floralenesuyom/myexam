import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'register', component: RegisterComponent}
];
