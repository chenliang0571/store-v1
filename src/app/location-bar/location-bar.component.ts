import { Component, OnInit } from '@angular/core';
import { LbsService } from '../lbs.service';

@Component({
  selector: 'app-location-bar',
  templateUrl: './location-bar.component.html',
  styleUrls: ['./location-bar.component.css']
})
export class LocationBarComponent implements OnInit {

  constructor(
    public lbsService: LbsService
  ) { }

  public ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.lbsService.setPosition(position);
      },
        (error: PositionError) => console.log(error));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
