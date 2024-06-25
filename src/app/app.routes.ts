import { Routes } from '@angular/router';
import HomeComponent from './Pages/home/home.component';
import LoginComponent from './Pages/login/login.component';
import RegisterComponent from './Pages/register/register.component';
import CarroComponent from './Pages/carro/carro.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'login', component: LoginComponent},
    {'path': 'register', component: RegisterComponent},
    {'path': 'carro', component: CarroComponent},
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
        
    },

];
