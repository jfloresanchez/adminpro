import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txProgress') txProgress: ElementRef;
  @Input('nombreLeyenda') leyenda: string = 'Leyenda';  // Se puede renombrar variable de entrada
  @Input('nombreProgreso') progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda ' + this.leyenda);
    // console.log('Progreso ' + this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda ' , this.leyenda);
    // console.log('Progreso ' , this.progreso);
  }

  onChanges(newValor: number) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log(this.txProgress);

    if (newValor >= 100 ) {
      this.progreso = 100;
    }else if (newValor <= 0) {
      this.progreso = 0;
    }else {
      this.progreso = newValor;
    }
    // elemHTML.value = this.progreso;
    this.txProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txProgress.nativeElement.focus();
  }

  cambiarValor( valor: number ) {
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txProgress.nativeElement.focus();
  }

}
