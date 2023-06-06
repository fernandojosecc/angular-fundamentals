import { Component } from '@angular/core';

import {Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  WidthImg = 10;
  name = 'Nicolas';
  age = 20;
  img = 'https://depor.com/resizer/zYAewNYe84T1H3sm_y61ClAywWI=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K74I6DN7S5HDZKGZMZ7SJX5ARE.jpg';
  btnDisabled = true;
  register ={
    name: '',
    email:'',
    password:'',
  }
  person={
    name :'Nicolas',
    age : 20,
    avatar:'https://depor.com/resizer/zYAewNYe84T1H3sm_y61ClAywWI=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K74I6DN7S5HDZKGZMZ7SJX5ARE.jpg',
  }

  names: string[] =['Nico','Juli','Santi'];
  newName = '';
  box = {
    width:100,
    height:100,
    background:'red'
  }
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }
  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;

  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index:number){
    this.names.splice(index,1);
  }
  onRegister(){
    console.log(this.register)
  }
}
