import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';

// Define the routes
const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: '**', component: PageNotFoundComponent },  // a route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
