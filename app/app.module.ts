import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { reducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { ProductComponent } from './product/product.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { MydataService } from './mydata.service';
import { LoginformComponent } from './loginform/loginform.component';
//import { HttpClient } from '@angular/common/http';
const routes: Routes = [
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'products/:id',
    component:ProductsComponent
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  },
 
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent,
    ViewcartComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  
  
    StoreModule.forRoot({cart : reducer})
    
  ],
  providers: [MydataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
