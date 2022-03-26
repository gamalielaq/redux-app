import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { dividir, multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(count => this.contador = count);
  }

  multiplicar() {
    this.store.dispatch(multiplicar({ numero: 2 }));
  }

  dividir() {
    this.store.dispatch(dividir({ numero: 4 }));
  }

}