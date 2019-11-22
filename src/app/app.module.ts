import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationBarComponent } from './location-bar/location-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CategoryComponent } from './category/category.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CssDemoComponent } from './css-demo/css-demo.component';
import { MaterialModule } from './material-module';
import { StoreBarComponent } from './store-bar/store-bar.component';
import { HomeComponent } from './home/home.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationBarComponent,
    SearchBoxComponent,
    CategoryComponent,
    PromotionComponent,
    CssDemoComponent,
    StoreBarComponent,
    HomeComponent,
    StoreDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
