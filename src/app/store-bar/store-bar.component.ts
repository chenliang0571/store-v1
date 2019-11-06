import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-store-bar',
  templateUrl: './store-bar.component.html',
  styleUrls: ['./store-bar.component.css']
})
export class StoreBarComponent implements OnInit {
  @Input() store: Store;

  constructor() { }

  ngOnInit() {
  }

}
