import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    if (usuarioService.loginSesion == null) {
      this.router.navigate(['/login']);
    } 
   }

  ngOnInit() {
  }

  consignar(): void {    
    this.router.navigate(['/consignar']);
  }

  retirar(): void {    
    this.router.navigate(['/retirar']);
  }

  cerrarSesion(): void {
    this.usuarioService.loginSesion = null;
    this.router.navigate(['/login']);
  }

}
