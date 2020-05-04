import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent implements OnInit {

  @Input() explicativo;

  constructor() { }

  ngOnInit() {
  }

}
