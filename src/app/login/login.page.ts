import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login={
    "usuario":"",
    "contrasena":""
  }

  usuarios={
    "usuario":"cristhian0076",
    "contrasena":"00761075"
  }
  
  message=""
  
  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  password(){

    if(this.login.usuario===""){
      this.message="Ingrese el usuario"

    }
    else if(this.login.contrasena===""){
      this.message="Ingrese la contraseña"

    }
    else if (this.login.usuario=== this.usuarios.usuario) {
        if (this.login.contrasena=== this.usuarios.contrasena) {
          this.router.navigateByUrl('/inicio');
        }
    }else{
      this.message="Datos incorrecto"
    }

  }

}
