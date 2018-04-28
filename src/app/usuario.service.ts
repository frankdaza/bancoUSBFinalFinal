import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './model/usuario';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UsuarioService {

  private urlUsuario: string;

  constructor(
    private http: HttpClient
  ) { }

  getUsuarioPorLogin(login: String) : Observable<Usuario> {
    this.urlUsuario = 'http://127.0.0.1:8080/banco/rest/controllers/usuario/getUsuario/' + login;
    return this.http.get<Usuario>(this.urlUsuario);  
  }

}
