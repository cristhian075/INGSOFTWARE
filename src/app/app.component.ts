import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Registrarse', url: '/registro', icon: 'person-add' },
  ];
  
  constructor() {}
}
