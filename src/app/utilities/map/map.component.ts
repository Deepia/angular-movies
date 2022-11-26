import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, Icon } from 'leaflet';

import { coordinatesMap } from './coordinate';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Icon.Default.imagePath = "assets/leaflet/" 
  }
  
  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(28.5355, 77.3910)
  };
  layers: Marker<any>[] = [];
  handleMapClick(event: LeafletMouseEvent){
     const latitude = event.latlng.lat;
     const longitude= event.latlng.lng;
     console.log(latitude,longitude);
     this.layers =[];
     this.layers.push(marker([latitude,longitude]));
     this.onSelectedLocation.emit({latitude,longitude});
  }
}
