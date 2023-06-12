export class Usuarios {
    usuario: string;
    pass: string;
    nombre: string;
    correo_electronico: string;
    img:string;
    constructor(usuario:string,pass:string,nombre:string,correo_electronico:string,img:string){
      this.usuario=usuario;
      this.pass=pass
      this.nombre=nombre
      this.correo_electronico=correo_electronico
      this.img=img
    }
}
