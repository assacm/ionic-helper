import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {
  contactos:any;
 
 
  constructor(private router: Router, private http: HttpClient) { }

 ngOnInit() {
   this.getContactos().subscribe( 
     res =>{ console.log("res: ", res) 
     this.contactos = res;
   })
 }

 getContactos(){
   return this.http.get("/assets/data/contactos.json").
   pipe( 
     map((res : any) => {return res.contacto;})
        )
 
 }

}