import { Component, OnInit } from '@angular/core';

export interface Tile {
  text: string;
  image: string;
  url: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  defaultTile = ' mat-grid-tile';
  categories: Tile[] = [
    {text: 'food', image: 'food-image', url: ''},
    {text: 'drink', image: 'drink-image', url: ''},
    {text: 'fruit', image: 'fruit-image', url: ''},
    {text: 'food', image: 'food-image', url: ''},
    {text: 'drink', image: 'drink-image', url: ''},
    {text: 'fruit', image: 'fruit-image', url: ''},
    {text: 'food', image: 'food-image', url: ''},
    {text: 'drink', image: 'drink-image', url: ''},
    {text: 'fruit', image: 'fruit-image', url: ''},
    {text: 'food', image: 'food-image', url: ''},
    {text: 'drink', image: 'drink-image', url: ''},
    {text: 'fruit', image: 'fruit-image', url: ''},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
