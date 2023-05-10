export class pelicula{
id:number
titulo:string
sinopsis:string
director:string
reparto:string
duracion:number
genero:string
año_estreno:number
imagen:string

constructor(id:number, titulo:string, sinopsis:string, director:string, reparto:string, duracion:number, genero:string, año_estreno:number, imagen:string){
this.id=id;
this.titulo=titulo;
this.sinopsis=sinopsis;
this.director=director;
this.reparto=reparto;
this.duracion=duracion;
this.genero=genero;
this.año_estreno=año_estreno;
this.imagen=imagen;

}
}