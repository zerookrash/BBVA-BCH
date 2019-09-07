import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Sweet Alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  titularAlerta = '';

  idPoliza = new FormGroup({
    poliza: new FormControl(null)
  });

  postIdPoliza() {
    if ( this.idPoliza.value.poliza === null ) {
      Swal.fire('Oops...', 'Algo no está bien!', 'error');
      this.idPoliza.reset();
    } else {
      console.log(this.idPoliza.value);
      this.idPoliza.reset();
      Swal.fire('Registro exitoso...', this.titularAlerta, 'success');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
