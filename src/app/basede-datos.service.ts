import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asientos } from './_Modules/Asientos';
import { Peliculas } from './_Modules/Peliculas';
import { Usuarios } from './_Modules/Usuarios';
import { Dias } from './_Modules/Dias';
import { Horarios } from './_Modules/Horarios';
import { Ventas } from './_Modules/Ventas';
@Injectable({
  providedIn: 'root'
})
export class BasedeDatosService {

  Urlpeliculas: string = "http://localhost:8080/peliculas";
  UrlUsuarios : string = "http://localhost:8080/usuarios";
  Urlhorarios : string = "http://localhost:8080/horarios";
  Urldias : string = "http://localhost:8080/dias";
  Urlasientos : string = "http://localhost:8080/asientos";
  Urlventas : string = "http://localhost:8080/ventas";

  constructor(private http: HttpClient) { }

  listarasientos(): Observable<Asientos[]> {
  return this.http.get<Asientos[]>(this.Urlasientos);
  }
  listarpeliculas(): Observable<Peliculas[]> {
  return this.http.get<Peliculas[]>(this.Urlpeliculas);
  }
  listarusuarios(): Observable<Usuarios[]> {
  return this.http.get<Usuarios[]>(this.UrlUsuarios);
  }
  listarhorarios(): Observable<Horarios[]> {
    return this.http.get<Horarios[]>(this.Urlhorarios);
  }
  listardiass(): Observable<Dias[]> {
    return this.http.get<Dias[]>(this.Urldias);
  }
  listarventas(): Observable<Ventas[]> {
    return this.http.get<Ventas[]>(this.Urlventas);
  }
  agregarUsuario(usuario: Usuarios): Observable<any> {
    const url = this.UrlUsuarios+"/agregarUsuario";
    console.log(url, usuario);
    return this.http.post(url, usuario);
  }

  agregarAsiento(asiento: Asientos): Observable<any> {
    const url = this.Urlasientos+"/agregarAsientos";
    console.log(url, asiento);
    return this.http.post(url, asiento);
  }
  agregarVentas(ventas: Ventas): Observable<any> {
    const url = this.Urlventas+"/agregarVentas";
    console.log(url, ventas);
    return this.http.post(url, ventas);

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
  findAsientosFila(peliculaid:number,diaid:number,horarioid:number,letra_fila:String): Observable<Asientos[]> {
    return this.http.get<Asientos[]>(`${this.Urlasientos}/asientos/${peliculaid}/${diaid}/${horarioid}/${letra_fila}`);
  }
}
