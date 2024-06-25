import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


interface producto {
  'name': string;
  'description': string;
  'price': number;
  'type': string;
}



@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export default class CarroComponent {

  constructor(private router: Router) {

  }

  ngOnInit() {
    const productsToBuy = this.router.lastSuccessfulNavigation;
    console.log(productsToBuy?.extras)

  }

  productos: producto[] = [
    { name: 'Berserk', description: 'miyazaki', price: 2500, type: 'manga' },
    { name: 'Mushoku', description: 'roxy', price: 5000, type: 'manga' },
    { name: 'Tsukimichi', description: 'leer', price: 1900, type: 'manga' },
    { name: 'SoloLeveling', description: 'ok', price: 3550, type: 'manga' },

  ];

  cantidadElemento = this.cantidadProductos();

  totalPrice = this.totalValue();

  cantidadProductos(): number {
    return this.productos.length;
  }

  totalValue(): number {
    let total = 0;
    this.productos.forEach(element => {
      total += element.price;
    });
    return total;
  }

}
