import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  consignar(): void {    
    this.router.navigate(['/consignar']);
  }

  retirar(): void {    
    this.router.navigate(['/retirar']);
  }

}
