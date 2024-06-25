import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import HomeComponent from './Pages/home/home.component';
import LoginComponent from './Pages/login/login.component';
import RegisterComponent from './Pages/register/register.component';
import CarroComponent from './Pages/carro/carro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, LoginComponent, RegisterComponent, RouterLink, CarroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'MangaWeb';
}
