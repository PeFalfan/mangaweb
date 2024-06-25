import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


interface producto {
  'name': string;
  'description': string;
  'price': number;
  'type': string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  constructor(private router: Router) {
  }

  productsToShoppingCart: producto[] = [];


  productsToSell: producto[] = [
    { name: 'Berserk', description: 'miyazaki', price: 2500, type: 'manga' },
    { name: 'Mushoku', description: 'roxy', price: 5000, type: 'manga' },
    { name: 'Tsukimichi', description: 'leer', price: 1900, type: 'manga' },
    { name: 'SoloLeveling', description: 'ok', price: 3550, type: 'manga' },
    { name: 'Berserk', description: 'miyazaki', price: 2500, type: 'manga' },
    { name: 'Mushoku', description: 'roxy', price: 5000, type: 'manga' },
    { name: 'Tsukimichi', description: 'leer', price: 1900, type: 'manga' },
    { name: 'SoloLeveling', description: 'ok', price: 3550, type: 'manga' }
  ];

  handleNavigation() {
    const productsToSell: producto[] = [
      { name: 'Berserk', description: 'miyazaki', price: 2500, type: 'manga' },
      { name: 'Mushoku', description: 'roxy', price: 5000, type: 'manga' },
      { name: 'Tsukimichi', description: 'leer', price: 1900, type: 'manga' },
      { name: 'SoloLeveling', description: 'ok', price: 3550, type: 'manga' },

    ];

    const navigationExtras: NavigationExtras = {
      state: {
        data: productsToSell
      }
    };

    this.router.navigate(['/carro'], navigationExtras);
  }

  addedNotification() {
    alert('Producto agregado al carro')
  }

}
