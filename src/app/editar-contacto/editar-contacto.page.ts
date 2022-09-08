import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.page.html',
  styleUrls: ['./editar-contacto.page.scss'],
})
export class EditarContactoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  infoContacto(){
    this.router.navigate(['/lista-contactos'])
  }

}
