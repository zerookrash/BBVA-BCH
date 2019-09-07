import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
      .subscribe( param => {
        console.log(param['termino']);
        // this.productoService.buscarProducto( param['termino'] );
      });
  }

}
