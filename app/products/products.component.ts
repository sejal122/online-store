import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppComponent } from '../app.component';
//import { MydataService } from '../mydata.service';
import { PRODUCTS } from '../store/market';
@Component({
  selector: 'app-products',
  template: `
  <span>  </span> <h3 id="cart"><i id="cart-icon" style=" font-size: 26px" class="material-icons">shopping_cart</i> Cart : {{cart.length}} <button class="btn btn-info" style="margin-left:55%;"><a style="color:white" [routerLink]="['/viewcart']">View cart</a></button></h3><hr>
  <div id="main" class="grid-container col-lg-4 col-md-4 col-sm-6 col-xs-12" *ngFor="let product of products" >
   <div class="grid-item my-list" >
  <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="" />
  <h3>{{product.name}}</h3>
  <span>$</span>
  <span class="pull-right">{{product.price}}</span>
  <div class="offer">Extra 5% Off. Cart value $ {{(product.price)-0.05 * product.price}}</div>
  <div class="detail">
      <p>{{product.name}} </p>
      <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="" />
      <a [routerLink]="['/product',product.id]" class="btn btn-info">View</a></div>
  </div>
 
     
  </div>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
products=PRODUCTS;
public datas=[]
cart: any[]=[];
  constructor(private route: ActivatedRoute, private store: Store<any> ) { }

  ngOnInit(): void {
 // this.prods.getdata().subscribe((data) =>{console.warn('getting api'),data})
 //this.prods
  }

}


