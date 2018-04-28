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

  constructor(    
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.txtUsuario = "";
    this.txtClave = "";
   }

  ngOnInit() {
  }

  login(): void{
    this.usuarioService.getUsuarioPorLogin(this.txtUsuario)
    .subscribe(response => {

      if (response != null) {
        if (response.clave == this.txtClave) {
          console.log("Logueo exitoso!");
          this.router.navigate(['/dashboard']);
        } else {
          console.log("Contraseña no válida!");
        }
      } else {
        console.log("Usuario o contraseña incorrecto!");
      }
      
    });
  }

}
