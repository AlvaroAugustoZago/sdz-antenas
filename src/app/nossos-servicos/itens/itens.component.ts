import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  @Input() icone: string;
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
