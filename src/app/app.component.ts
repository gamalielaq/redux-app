import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './contador/app.reducer';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number;

  constructor(
    private store: Store<AppState>
  ) {
    //select --> Solo seleccionanmos le valor del contador
    this.store.select('contador').subscribe( contador => {
      console.log(contador);
      this.contador = contador;
    })
  }

  incrementar() {
      this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    this.store.dispatch(actions.decrementar());
  }
}
