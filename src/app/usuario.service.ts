import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from './model/usuario';
import { of } from 'rxjs/observable/of';
import { Respuesta } from './model/respuesta';

@Injectable()
export class UsuarioService {

  private urlUsuario: string;
  public loginSesion: string;

  constructor(
    private http: HttpClient
  ) { }

  getUsuarioPorLogin(login: string) : Observable<Usuario> {
    this.urlUsuario = 'http://127.0.0.1:8080/banco/rest/controllers/usuario/getUsuario/' + login;
    this.loginSesion = login;
    return this.http.get<Usuario>(this.urlUsuario);  
  }

  setConsignar(numeroCuenta: string, valor: Number, numeroCedula: Number) : Observable<Respuesta> {
    this.urlUsuario = 'http://127.0.0.1:8080/banco/rest/controllers/transaccion/consignarTransaccion/' + numeroCuenta + '/' + this.loginSesion + '/' + valor + '/' + numeroCedula;
    return this.http.get<Respuesta>(this.urlUsuario);
  }

  setRetirar(numeroCuenta: string, valor: Number) : Observable<Respuesta> {
    this.urlUsuario = 'http://127.0.0.1:8080/banco/rest/controllers/transaccion/retiroTransaccion/' + numeroCuenta + '/' + this.loginSesion + '/' + valor;
    return this.http.get<Respuesta>(this.urlUsuario);
  }

}
