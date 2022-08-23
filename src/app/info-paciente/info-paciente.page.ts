import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-paciente',
  templateUrl: './info-paciente.page.html',
  styleUrls: ['./info-paciente.page.scss'],
})
export class InfoPacientePage implements OnInit {
  public form = [
    { val: 'Ninguna', isChecked: true },
    { val: 'Sin cambios', isChecked: false },
    { val: 'Sin medidor', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}
