import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface OpenStreetMapAddress {
  display_name: string;
  lat: string;
  lon: string;
}

@Injectable({
  providedIn: 'root'
})

export class LbsService {

  constructor(
    private http: HttpClient
  ) { }
  public lat: number;
  public lng: number;
  public address = 'unknow location.';
  private getAddressAPI = 'https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=';

  public setPosition(position: Position) {
    if (position) {
      console.log('Latitude: ' + position.coords.latitude +
        ', Longitude: ' + position.coords.longitude);
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      this.http.get<OpenStreetMapAddress[]>(this.getAddressAPI + this.lat + ',' + this.lng)
      .subscribe(data => {
        console.log(data);

        if (data.length > 0) {
          this.address = data[0].display_name;
          console.log(this.address);
        }
      });
    }
  }
}
