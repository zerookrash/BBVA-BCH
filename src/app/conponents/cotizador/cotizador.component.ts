import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// Sweet Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {

  cotizaForm = new FormGroup({
    anio : new FormControl(''),
    marca : new FormControl('Marca del Automovil'),
    modelo : new FormControl(''),
    tipo : new FormControl('Tipo de Automovil'),
    clausulas : new FormControl('Clausulas de Limite de Velocidad')
  });

  valorCotiza = 0;
  primaBase = 50000;
  titularAlerta = '';

  calculo() {
    // tslint:disable-next-line: no-unused-expression
    const tipo = this.cotizaForm.value.tipo;
    const clausula = this.cotizaForm.value.clausulas;
    const marca = this.cotizaForm.value.marca;

    if ( marca === 'Ford' && tipo === '2 Puertas' && clausula === 'Tipo A' ) {
      this.valorCotiza = this.primaBase + (this.primaBase * .10);
    } else if ( marca === 'Ford' && tipo === '2 Puertas' && clausula === 'Tipo B') {
      this.valorCotiza = this.primaBase + (this.primaBase * .15);
    } else if ( marca === 'Ford' && tipo === '4 Puertas' && clausula === 'Tipo A' ) {
      this.valorCotiza = this.primaBase + (this.primaBase * .05);
    } else if ( marca === 'Ford' && tipo === '4 Puertas' && clausula === 'Tipo B' ) {
      this.valorCotiza = this.primaBase + (this.primaBase * .10);
    } else if ( marca === 'Toyota' && tipo === '2 Puertas' && clausula === 'Tipo A') {
      this.valorCotiza = this.primaBase + (this.primaBase * .05 );
    } else if ( marca === 'Toyota' && tipo === '2 Puertas' && clausula === 'Tipo B') {
      this.valorCotiza = this.primaBase + (this.primaBase * .1);
    } else if ( marca === 'Toyota' && tipo === '4 Puertas' && clausula === 'Tipo A') {
      this.valorCotiza = this.primaBase + (this.primaBase * .05);
    } else if ( marca === 'Toyota' && tipo === '4 Puertas' && clausula === 'Tipo B') {
      this.valorCotiza = this.primaBase + (this.primaBase * .0);
    } else if ( marca === 'Nissan' && tipo === '2 Puertas' && clausula === 'Tipo A') {
      this.valorCotiza = this.primaBase + (this.primaBase * .15);
    } else if ( marca === 'Nissan' && tipo === '2 Puertas' && clausula === 'Tipo B') {
      this.valorCotiza = this.primaBase + ( this.primaBase * .2);
    } else if ( marca === 'Nissan' && tipo === '4 Puertas' && clausula === 'Tipo A') {
      this. valorCotiza = this.primaBase + (this.primaBase * .1);
    } else if ( marca === 'Nissan' && tipo === '4 Puertas' && clausula === 'Tipo B') {
      this.valorCotiza = this.primaBase + (this.primaBase * .15);
    }
    Swal.fire(`Tu cotización es de $ ${this.valorCotiza}.00`, this.titularAlerta, 'success');
  }


  constructor() {}

  ngOnInit() {
  }

}
