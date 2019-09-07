import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  regForm = new FormGroup({
    name: new FormControl(''),
    last: new FormControl(''),
    rfc: new FormControl(''),
    curp: new FormControl(''),
    ine: new FormControl(''),
    licencia: new FormControl(''),
    ctaBancaria: new FormControl(''),
    noTarjeta: new FormControl(''),
    fechaVencimiento: new FormControl(''),
    cvv: new FormControl(''),
    mail: new FormControl(''),
    nameBeneficiary: new FormControl(''),
    ctaBeneficiatry: new FormControl('')
  });

  envio() {
    if(!this.regForm.value.name || !this.regForm.value.rfc) {
      alert('No hay datos');
      this.regForm.reset();
    } else {
      console.log(this.regForm.value);
      this.regForm.reset();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
