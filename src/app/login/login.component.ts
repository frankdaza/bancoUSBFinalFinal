import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  txtUsuario: string;
  txtClave: string;
  txtMensajeError: string;

  constructor(    
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.txtUsuario = "";
    this.txtClave = "";
    this.txtMensajeError = "";
   }

  ngOnInit() {
  }

  login(): void{
    if (this.txtUsuario != "") {
      if (this.txtClave != "") {
        this.usuarioService.getUsuarioPorLogin(this.txtUsuario)
          .subscribe(response => {

            if (response != null) {
              if (response.clave == this.txtClave) {                
                this.router.navigate(['/dashboard']);
              } else {
                this.txtMensajeError = "Usuario o contraseña incorrecto!";
              }
            } else {
              this.txtMensajeError = "Usuario o contraseña incorrecto!";
            }
            
          });
      } else {
        this.txtMensajeError = "Ingrese una clave";  
      }
    } else {
      this.txtMensajeError = "Ingrese un usuario";
    }
  }

}
