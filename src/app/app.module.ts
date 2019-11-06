import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationBarComponent } from './location-bar/location-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CategoryComponent } from './category/category.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CssDemoComponent } from './css-demo/css-demo.component';

const matModules = [
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule
];

@NgModule({
  declarations: [
    AppComponent,
    LocationBarComponent,
    SearchBoxComponent,
    CategoryComponent,
    PromotionComponent,
    CssDemoComponent
  ],
  exports: [
    matModules
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    matModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
