import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path : '' , redirectTo : '/products' , pathMatch: 'full'},
  {path : 'products' , component : ProductsComponent},
  {path : 'product-details' , component : ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
