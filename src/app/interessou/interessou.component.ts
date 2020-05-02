import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interessou',
  templateUrl: './interessou.component.html',
  styleUrls: ['./interessou.component.css']
})
export class InteressouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNavigate() {
    window.open("https://www.google.com", "_blank");
  }
}
