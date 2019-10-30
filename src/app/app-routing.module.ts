import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssDemoComponent } from './css-demo/css-demo.component';


const routes: Routes = [
  { path: 'css', component: CssDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
