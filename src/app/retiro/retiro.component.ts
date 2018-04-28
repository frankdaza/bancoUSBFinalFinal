import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {

  txtNumeroCuenta: string;
  txtValor: Number;
  txtCedula: Number;
  txtClave: string;
  txtMensajeError: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { 
    if (usuarioService.loginSesion == null) {
      this.router.navigate(['/login']);
    } else {
      this.txtNumeroCuenta = "";
      this.txtValor = 0;
      this.txtClave = "";
      this.txtMensajeError = "";
      this.txtCedula = 0;
    }
  }

  ngOnInit() {
  }

  retirar(): void {
    if (this.txtNumeroCuenta != "") {
      if (this.txtValor > 0) {
        if (this.txtCedula > 0) {
          if (this.txtClave != "") {
            this.usuarioService.setRetirar(this.txtNumeroCuenta, this.txtValor, this.txtCedula, this.txtClave)
              .subscribe(response => {
                this.txtMensajeError = response.mensajeError;
                if (response.codigoError == 0) {          
                  console.log(this.txtMensajeError);
                } else {
                  console.log(this.txtMensajeError);
                }
              });
          } else {
            this.txtMensajeError = "Ingrese una clave válida";      
          }
        } else {
          this.txtMensajeError = "Ingrese un número de cédula válido";    
        }
      } else {
        this.txtMensajeError = "Ingrese un número mayor a cero";  
      }
    } else {
      this.txtMensajeError = "Ingrese un número de cuenta";
    }
  }

  homepage(): void {
    this.router.navigate(['/dashboard']);
  }

}
