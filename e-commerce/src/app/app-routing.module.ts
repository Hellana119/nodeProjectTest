import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartPageComponent } from './Components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './Components/pages/food-page/food-page.component';
import { HomeComponent } from './Components/pages/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
