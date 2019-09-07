import { Component, OnInit } from '@angular/core';
import { BusquedasService } from '../../services/busquedas.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor( private busquedaSvc: BusquedasService) {}

  ngOnInit() {
  }

  search(value){
    console.log(value);
    let data = this.busquedaSvc.getData(value);
    console.log(data);
  }

}
