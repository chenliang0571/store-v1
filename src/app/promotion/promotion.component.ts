import { Component, OnInit } from '@angular/core';
import { Store } from '../objects';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  allCategries = ['汉堡', '早餐', '早午餐', '炸鸡', '美式', '美国南方黑人传统食物', '土耳其', '中餐', '日本', '泰国'];
  stores: Store[] = [];

  constructor() {
    for (let counter = 1; counter < 10; counter++) {
      this.stores.push(
        {
          name: this.getCategry() + ' store',
          categories: [this.getCategry(), this.getCategry()],
          image: '/assets/images/bar' + this.getRndInteger(1, 5) + '.jpg'
        });
    }
   }

  ngOnInit() {
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getCategry(): string {
    const max = this.allCategries.length - 1;
    return this.allCategries[this.getRndInteger(max, 0)];
  }
}
