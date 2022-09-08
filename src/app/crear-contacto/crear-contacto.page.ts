import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.page.html',
  styleUrls: ['./crear-contacto.page.scss'],
})
export class CrearContactoPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  listaContactos(){
    this.router.navigate(['/lista-contactos'])
  }

}
