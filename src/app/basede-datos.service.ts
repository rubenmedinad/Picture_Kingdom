import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asientos } from './_Modules/Asientos';
import { Peliculas } from './_Modules/Peliculas';
@Injectable({
  providedIn: 'root'
})
export class BasedeDatosService {
  Urlasientos: string = "http://localhost:8080/asientos";
  Urlpeliculas: string = "http://localhost:8080/peliculas";

  constructor(private http: HttpClient) { }

  listarasientos(): Observable<Asientos[]> {
    return this.http.get<Asientos[]>(this.Urlasientos);
  }

  listarpeliculas(): Observable<Peliculas[]> {
    return this.http.get<Peliculas[]>(this.Urlpeliculas);
    console.log(this.http.get<Peliculas[]>(this.Urlpeliculas))
}
}
