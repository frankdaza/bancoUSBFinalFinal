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
      this.txtMensajeError = "";
    }
  }

  ngOnInit() {
  }

  retirar(): void {
    if (this.txtNumeroCuenta != "") {
      this.usuarioService.setRetirar(this.txtNumeroCuenta, this.txtValor)
      .subscribe(response => {
        this.txtMensajeError = response.mensajeError;
        if (response.codigoError == 0) {          
          console.log(this.txtMensajeError);
        } else {
          console.log(this.txtMensajeError);
        }
      });
    } else {
      this.txtMensajeError = "Ingrese un número de cuenta";
    }   
  }

  homepage(): void {
    this.router.navigate(['/dashboard']);
  }

}
