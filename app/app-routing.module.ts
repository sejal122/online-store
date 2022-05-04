import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { ProductComponent } from './product/product.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { LoginformComponent } from './loginform/loginform.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
},
{
    path: 'products',
    component: ProductsComponent
},
{
  path: 'loginform',
  component: LoginformComponent
},
{
    path: 'cart',
    component: CartComponent
},
{
  path: 'viewcart',
  component: ViewcartComponent
},
{
    path: 'product/:id',
    component: ProductComponent
},
{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
