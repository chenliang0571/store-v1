import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../objects';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  menu: Menu = { restaurant: '', address: '', geohash: '', image_url: '', rating: 0, menus: [] };
  // menu: Menu;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const name = params.get('name');
      this.menu.restaurant = name;
      this.http.get<Menu>('/assets/json/menu.json?name=' + name)
        .subscribe(data => {
          console.log(data);
          this.menu = data;
        });
    });
  }
}
