import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private urlApi: string = environment.urlApi;
  selectedUser: Usuario = new Usuario();

  constructor(private http: HttpClient) { }

  public getUsuarios() {
    return this.http.get(`${this.urlApi}`);
  }

  public postUsuario(body) {
    return this.http.post(`${this.urlApi}`, body);
  }

  public updateUser(body) {
    return this.http.put(`${this.urlApi}`, body);
  }
}
