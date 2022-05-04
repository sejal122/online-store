import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from "./../store/market";
import { Product } from "./../store/product.model"
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as Cart from "./../store/action";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-viewcart',
  template: `
    <div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" *ngFor="let product of cart | async">
    <div class="my-list">
        <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="" />
        <h3>{{product.name}}</h3>
        <span>$</span>
        <span class="pull-right">{{product.price}}</span>
        <div class="offer">
          Extra 5% Off. Cart value $ {{0.5 * product.price}}
          <a style="color:white;margin-left:20px"(click)="deleteCart(product)" class="btn btn-danger"><i class="material-icons">delete</i></a>
        </div>
    </div>
  </div>
   </div>
  `,
  styles: [
  ]
})
export class ViewcartComponent implements OnInit {
  product: Product;
  cart: Observable<Array<any>>
  constructor(private route: ActivatedRoute, private store: Store<any>) {
    this.cart = this.store.select('cart')
   }
   deleteCart(product: any) {
    this.store.dispatch(new Cart.Removeproduct(product))
  }
  ngOnInit(): void {
    this.route.params.subscribe((p)=>{
      let id = p['id']
      let result = Array.prototype.filter.call(PRODUCTS,(v)=>v.id == id)
      if (result.length > 0) {
        this.product = result[0]
      }
  })
  }
}
