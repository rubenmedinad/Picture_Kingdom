import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asientos } from './_Modules/Asientos';
import { Peliculas } from './_Modules/Peliculas';
import { Usuarios } from './_Modules/Usuarios';
@Injectable({
  providedIn: 'root'
})
export class BasedeDatosService {
  Urlasientos: string = "http://localhost:8080/asientos";
  Urlpeliculas: string = "http://localhost:8080/peliculas";
  Urlsinopsis : string = "http://localhost:8080/peliculas";
  UrlUsuarios : string = "http://localhost:8080/usuarios";
  constructor(private http: HttpClient) { }

  listarasientos(): Observable<Asientos[]> {
    return this.http.get<Asientos[]>(this.Urlasientos);
  }

  listarpeliculas(): Observable<Peliculas[]> {
    return this.http.get<Peliculas[]>(this.Urlpeliculas);
}

  listarsinopsis(): Observable<Peliculas> {
    return this.http.get<Peliculas>(this.Urlsinopsis);
}

  listarusuario(): Observable<Usuarios> {
  return this.http.get<Usuarios>(this.UrlUsuarios);
}
}
