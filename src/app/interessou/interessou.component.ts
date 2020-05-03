import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interessou',
  templateUrl: './interessou.component.html',
  styleUrls: ['./interessou.component.css']
})
export class InteressouComponent implements OnInit {

  lat: number = -26.051737;
  lng: number = -48.611604;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

  onNavigate() {
    window.open("https://www.google.com", "_blank");
  }
}
