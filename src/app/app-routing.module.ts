import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [{
  path: '',
  component: ProductListComponent
},
{
  path: 'product/:productId',
  component: ProductDetailsComponent,
},
{
  path: 'check-out',
  component: CheckOutComponent
},
{
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
