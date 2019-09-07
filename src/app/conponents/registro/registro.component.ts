import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  idPoliza = new FormGroup({
    poliza: new FormControl(null)
  });

  postIdPoliza() {
    if ( this.idPoliza.value.poliza === null ) {
      alert('No hay datos');
      this.idPoliza.reset();
    } else {
      console.log(this.idPoliza.value);
      this.idPoliza.reset();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
