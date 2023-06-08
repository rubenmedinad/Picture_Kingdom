import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asientos } from './_Modules/Asientos';
import { Peliculas } from './_Modules/Peliculas';
import { Usuarios } from './_Modules/Usuarios';
import { Dias } from './_Modules/Dias';
import { Horarios } from './_Modules/Horarios';
@Injectable({
  providedIn: 'root'
})
export class BasedeDatosService {
  Urlasientos: string = "http://localhost:8080/asientos";
  Urlpeliculas: string = "http://localhost:8080/peliculas";
  UrlUsuarios : string = "http://localhost:8080/usuarios";
  Urlhorarios : string = "http://localhost:8080/horarios";
  Urldias : string = "http://localhost:8080/dias";

  constructor(private http: HttpClient) { }

  listarasientos(): Observable<Asientos[]> {
  return this.http.get<Asientos[]>(this.Urlasientos);
  }

  listarpeliculas(): Observable<Peliculas[]> {
  return this.http.get<Peliculas[]>(this.Urlpeliculas);
  }
  listarusuarios(): Observable<Usuarios> {
  return this.http.get<Usuarios>(this.UrlUsuarios);
  }
  listarhorarios(): Observable<Horarios[]> {
    return this.http.get<Horarios[]>(this.Urlhorarios);
  }
  listardiass(): Observable<Dias[]> {
    return this.http.get<Dias[]>(this.Urldias);
  }
  agregarUsuario(usuario: Usuarios): Observable<any> {
    const url = this.UrlUsuarios+"/agregarUsuario";
    return this.http.post(url, usuario);
  }


  agregarAsiento(asiento: Asientos): Observable<any> {
    const url = this.Urlasientos+"/agregarAsientos";
    return this.http.post(url, asiento);
  }


  obtenerDiaId(dia: string): Observable<number> {
    return this.http.get<number>(`${this.Urldias}/obtenerDiaId?dia=${dia}`);
  }
  obtenerPorPeliculaYDia(peliculaid: number, diaid: number): Observable<Horarios[]> {
    return this.http.get<Horarios[]>(`${this.Urlhorarios}/pelicula/${peliculaid}/dia/${diaid}`);
  }
  findAsientos(peliculaid:number,diaid:number,horarioid:number): Observable<Asientos[]> {
    return this.http.get<Asientos[]>(`${this.Urlasientos}/pelicula/${peliculaid}/${diaid}/${horarioid}`);
  }
}
