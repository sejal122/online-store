import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { Store , select } from '@ngrx/store';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <h1 style="background-color:black;color:white;padding:10px;letter-spacing:2px">{{title}} <span><button  [routerLink]="['/loginform']" class="btn btn-warning" style="font-size:1rem;float:right">Login</button></span></h1><hr>
 
  <button [routerLink]="['/products']" *ngIf="router.url ==''" class="btn btn-danger" style="margin-left:39%;padding:30px;margin-top:10%;font-size:3rem;" >SHOP NOW!</button>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'online-store';
  cart: any[]=[];
  
hiddenelem=false;
  constructor(private store:Store<any> , public router:Router){
    
      
  }
ngOnInit(){
  this.store.select('cart').subscribe((state=>this.cart=state))
}
}
