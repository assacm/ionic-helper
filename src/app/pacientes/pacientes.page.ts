import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {
  pacientes:any=[];
  
  constructor(private router: Router, private http: HttpClient) { }
  
  ngOnInit() {
    this.getPacientes().subscribe( 
      res =>{ console.log("res: ", res) 
      this.pacientes = res;
    })
  }

  getPacientes(){
    return this.http.get("assets/data/pacientes.json").
    pipe( 
      map((res : any) => {return res.paciente;})
         )
  
  }
}
