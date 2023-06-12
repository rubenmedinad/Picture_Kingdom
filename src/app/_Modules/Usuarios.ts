export class Usuarios {
    usuario: string;
    pass: string;
    nombre: string;
    correo_electronico: string;
    constructor(u:string,p:string,n:string,c:string){
      this.usuario=u;
      this.pass=p
      this.nombre=n
      this.correo_electronico=c
    }
}
