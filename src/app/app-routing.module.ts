import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssDemoComponent } from './css-demo/css-demo.component';
import { HomeComponent } from './home/home.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store/:name', component: StoreDetailComponent },
  { path: 'css', component: CssDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
