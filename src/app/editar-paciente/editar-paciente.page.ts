import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.page.html',
  styleUrls: ['./editar-paciente.page.scss'],
})
export class EditarPacientePage implements OnInit {
  public form = [
    { val: 'Ninguna', isChecked: true },
    { val: 'Sin cambios', isChecked: false },
    { val: 'Sin medidor', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}
