import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarChek();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarChek(link);
    this._ajustes.aplicarTema( tema );
  }

  aplicarChek( link: any ) {
    // console.log(link);
    // Barrer todos los selectores por medio de su clase selector

    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarChek() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
