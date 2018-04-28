import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-consignar',
  templateUrl: './consignar.component.html',
  styleUrls: ['./consignar.component.css']
})
export class ConsignarComponent implements OnInit {

  txtNumeroCuenta: string;
  txtValor: Number;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { 
    this.txtNumeroCuenta = "";
    this.txtValor = 0;
  }

  ngOnInit() {
  }

  consignar(): void {
    this.usuarioService.setConsignar(this.txtNumeroCuenta, this.txtValor)
    .subscribe(response => {
      if (response.codigoError == 0) {
        console.log("Error al realizar la transacción!");
      } else {
        console.log("Transacción realizada exitosamente!");
      }
    });
  }

}
