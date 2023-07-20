import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

  products: Product[]=[
    {
      id:'1',
      name: 'El mejor juguete',
      price:565,
      image: './assets/images/toy.jpg'
    },
    {
      id:'1',
      name: 'El mejor juguete',
      price:565,
      image: './assets/images/toy.jpg'
    },
    {
      id:'1',
      name: 'El mejor juguete',
      price:565,
      image: './assets/images/toy.jpg'
    }
  ];

  onLoaded(img:string){
    console.log('log padre')
  }
}
