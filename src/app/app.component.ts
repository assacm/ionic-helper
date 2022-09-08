import { Component } from '@angular/core';
//import {Socket} from 'ng-socket-io';
//import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Pacientes', url: '/pacientes', icon: 'person-outline' },
    { title: 'Dispositivos', url: '/dispositivos', icon: 'watch-outline' },
    { title: 'Contactos', url: '/contactos', icon: 'people-circle-outline' },
    { title: 'Ambulancia', url: '/folder/Archived', icon: 'medical-outline' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help-circle-outline' },
    { title: 'Cerrar sesión', url: '/log-in', icon: 'log-out-outline' },
  ];

  constructor() {
  }

}
