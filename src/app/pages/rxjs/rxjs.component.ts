import { Component, OnInit, OnDestroy } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
subscription: Subscription;
  constructor() {

    // obs.subscribe (numero => { tiene 3 funciones de flecha
    //   console.log( 'Subs', numero );
    // });

    // 1 recibo todo lo que me envia el observador
    // 2 el error que emita el observador
    // 3 cuando termina


    this.subscription = this.regresaObservable()
      // .retry( 2 )
      .subscribe(
      numero => console.log( 'Subs RxJs', numero ),
      error => console.error( error, 'Error en el obs (2 veces)', error ),
      () => console.log( 'El observador termino' )
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log( 'Saliendo de la pagina' );
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
  // regresaObservable(): Observable<number> {
    return new Observable( ( observer ) => {
      let contador = 0;

      let intervalo = setInterval( () => {
        contador += 1;
        
        let salida = {
          valor: contador
        };

        // observer.next( contador );
        observer.next( salida );

        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete( );
        // }
        // if ( contador === 2 ) {
        //   observer.error( 'Se disparo el error del observer' );
        // }
        
      }, 500 );
    })
    .retry( 2 )
    .map ( (resp: any) => {
      return resp.valor;
    })
    .filter( (valor, index) => {
      // console.log( 'Filter', valor, index );
      if ( (valor % 2) === 1 ) {
        // impar
        return true;
      }else {
        // par
        return false;
      }
    });

  }

}
