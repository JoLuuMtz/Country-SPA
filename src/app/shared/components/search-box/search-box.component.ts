

import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, take, takeUntil } from 'rxjs';

@Component({

  selector: 'search-box',

  template: `
  <hr>
  <input class="form-control"  type="text" [placeholder]="placeholder"
    #txtInput (keyup)="onKeyPress(txtInput.value)"   >
    <!-- #txtInput (keyup)="searchEmit.emit(txtInput.value)"   > -->
    <hr>

    `
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  ngOnDestroy(): void {
    // Limpia la subcripcion del observable cuando el componente es destruido
    this._debouncer.unsubscribe();
  }

  // subject: tipo de observable que emite valores
  //de manera asincrona en este caso emitira valores en
  //un tiempo determinado
  private _debouncer: Subject<string> = new Subject();

  // recibe el placeholder del  componente padre
  @Input() placeholder: string = '';

  @ViewChild('txtInput')
  searchInput!: ElementRef<HTMLInputElement>;

  // emite el valor del input al componente padre txtInput.value
  @Output('search')
  searchEmit = new EventEmitter<string>();

  ngOnInit(): void {

    this._debouncer
      .pipe(
        debounceTime(200)// tiempo de espera para emitir el valor
      )
      .subscribe(value => {
        this.searchEmit.emit(value); // emite el valor al evento search @output pero luego del tiempo de espera
      }), takeUntil(this.searchEmit); // se desuscribe del observable cuando el componente es destruido

  }
  onKeyPress(search: string) {
    this._debouncer.next(search);// emite el valor del input con el metodo next
  }



}
