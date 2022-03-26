import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  @Input() contador: number;
  @Output() contadorCambio = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }


  reset() {
    this.contador = 0;
    this.contadorCambio.emit(this.contador);
  }
}
