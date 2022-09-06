import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-info-paciente',
  templateUrl: './info-paciente.page.html',
  styleUrls: ['./info-paciente.page.scss'],
})
export class InfoPacientePage implements OnInit {
   id:string;
   disp:string;
   nombre:string;
   apellido:string;
   sexo:string;
   edad:string;
   sangre:string;
   servMed:string;
   alergias:any=[];
   medicamentos:any=[];
   enfermedades:any=[];
   pacientes:any;
   nss:string;

  constructor(private activatedRoute : ActivatedRoute,  private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", this.id)
    this.getPacientes().subscribe(
      res =>{
        this.pacientes= res;
        this.disp=this.pacientes[this.id].disp;
        this.nombre=this.pacientes[this.id].nombre;
        this.apellido=this.pacientes[this.id].apellido;
        this.sexo=this.pacientes[this.id].sexo;
        this.edad=this.pacientes[this.id].edad;
        this.sangre=this.pacientes[this.id].sangre;
        this.servMed=this.pacientes[this.id].servicioMedico;
        this.alergias=this.pacientes[this.id].alergias;
        this.medicamentos=this.pacientes[this.id].medicamentos;
        this.enfermedades=this.pacientes[this.id].enfermedades;
        this.nss=this.pacientes[this.id].nss;

      }

    )
  }

  getPacientes(){
    return this.http.get("assets/data/pacientes.json").
    pipe( 
      map((res : any) => {return res.paciente;})
         )
  
  }

}
